const router = require("express").Router();
var nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'HOA.Helper.App@gmail.com',
           
       }
   })

   const mailOptions = {
    from: 'HOA.Helper.App@gmail.com', // sender address
    to: 'kylekratt@gmail.com', // list of receivers
    subject: 'A message from your friendly neighborhood HOA', // Subject line
    html: '<p>This is a test</p>'// plain text body
  };

router.route("/send").post(function(req, res) {
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          res.json(err)
        else
          res.json(info);
     });
})

module.exports = router