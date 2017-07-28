var express = require('express');
var router = express.Router();
var Student = require('../models/student');

/* GET home page. */
router.get('/', function(req, res) {
  Student.find({},function (err , students) {
    console.log(students);
      res.render('index', { students: students });
  });
});

/* Show create student from */
router.get('/new',function (req, res) {
    res.render('new');
})

/*Create new Student*/
router.post('/new',function (req , res) {
    var student = new Student();
    student.name = req.body.name;
    student.address = req.body.address;
    student.phone = req.body.phone;
    student.email = req.body.email;
    student.create_date = Date.now();

    student.save(function (err) {
        if(err){
          res.render('error', {message :"Error creating student" , error:{status:500}});
        }else {
          res.redirect('/');
        }
    })
})

/*Show edit Student*/
router.get('/edit/:id',function (req , res) {
    Student.findById(req.params.id,function (err , student) {
        if (student){
            res.render('edit',{student : student});
        }else {
            res.render('error', {message :"Student not found" , error:{status:404}});
        }
    })
})

module.exports = router;
