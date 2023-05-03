var express = require('express');

var mysql = require('mysql'); 
 
var app = express();
var path = require('path');

app.set("view engine", "ejs");

var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//connect with mysql 
var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'WagsforMags',
  });

  app.listen(8080, function () {
    console.log('App listening on port 8080!');
   });

   app.get("/", function(req, res){
    res.render("home.ejs"); 
    });

  //checking connection 
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    });

    app.get("/insert", function(req, res){
        res.render("insert"); 
        });

    app.post("/insert", function(req, res) {
        let now = new Date();
        var student_info = { first_name: req.body.first_name, last_name: req.body.last_name, email :req.body.email, Student_ID :req.body.student_id, date: now}; //std info 
        console.log(student_info);
        var q = "insert into email_list set ?";
        con.query(q, student_info, function(error, results) {
        if (error) throw error;
        res.redirect("/home"); //redirect to root page 
        //res.send("Thank you. Your information is added!");//or just send //a msg 
        });
        });

       // con.end();

app.get("/delete", function(req, res){
    res.render("delete"); 
    });

    app.post("/delete", function(req, res) {
        var student_id = req.body.student_id;
        var q = "delete from email_list where student_id = " + student_id;
        con.query(q, function(error, results) {
        if (error) throw error;
        res.redirect("/home"); //redirect to root page 
        });
        });

        app.get("/displayall", function(req,res){
            var q = "select * from email_list";
            con.query(q,function(error, results){
                if (error) throw error;
                res.render("displayall", {data: results});

            });
        });


        app.get("/update", function(req, res){
            res.render("update"); 
            });

         //update a student 
         app.post("/update",function(req,res){
            let now = new Date();
            //var student_info = { first_name: req.body.first_name, last_name: req.body.last_name, email :req.body.email, Student_ID :req.body.student_id, date: now }; //std info 
            //console.log("this is what we want" + student_info);
            var student_id = req.body.student_id;
            var q = "update email_list set date = ? WHERE student_ID = ?";
            con.query(q, [now, student_id],function(error, results) {
            if (error) throw error;
            res.redirect("/"); //redirect to root page 
             });
            });

            app.get("/search", function(req, res){
                res.render("search"); 
                });
        
                //search for a student 
                app.post("/search",function(req,res){
         
                var student_id = req.body.student_id; 
                console.log("Searched Student ID:"+ student_id);
                var q = "select * from email_list where student_id = ?"; 
        
                con.query(q, student_id, function (error, results) {
                if (error) throw error;
                  res.render("search_result",{data:results});
                   //res.send("Thank you!");
                 });
                });


/*var i = "INSERT INTO `Email_List`(`first_name`, `last_name`, `email`, `date`) VALUES ('maddi','Narducci','mnarducci@mail.bradley.edu','big rocky fan',NOW())";
con.query(i,function(err, results, fields){
    if(err)throw err;
    console.log("Insert successful");
});

var del = "DELETE FROM `Email_List` WHERE first_name = 'collin';";
con.query(del,function(err, results, fields){
    if(err)throw err;
    console.log("Delete successful");
});

var s = "SELECT * FROM `Email_List` WHERE last_name = 'rebhan';";
con.query(s,function(err, results, fields){
    if(err)throw err;
    console.log("Search results");
    console.log(results);
});

var s = "UPDATE `Email_List` SET `first_name`='maddi',`last_name`='narducci',`email`='mnarducci@mail.bradley.edu',`comments`='rocky is the best pup',`date`= NOW() WHERE first_name = 'maddi' AND last_name = 'narducci'";
con.query(s,function(err, results, fields){
    if(err)throw err;
    console.log("Search results");
    console.log(results);
});
*/
