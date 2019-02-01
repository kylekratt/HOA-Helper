const router = require("express").Router();
var nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'HOA.Helper.App@gmail.com',
           pass: 'HOAHelper4U2'
       }
   })

   

router.route("/send").post(function(req, res) {
  const mailOptions = {
    from: 'HOA.Helper.App@gmail.com', // sender address
    to: req.body.recipients, // list of receivers
    subject: req.body.subject, // Subject line
    html: req.body.content// plain text body
  };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
          console.log(err);
          res.json(err);
        }
        else{
          console.log(info);
          res.json(info);
        }
     });
})

module.exports = router