'use strict';

var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

var contactRouter = module.exports = exports = express.Router();

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PW
  }
});

contactRouter.post('/', function(req, res) {
  var mailOptions = {
    from: {name: 'mikeskalandunas.com', address: 'mskalandunas@gmail.com'},
    to: {name: 'mikeskalandunas.com', address: 'mskalandunas@gmail.com'},
    subject: 'Message from contact form at mikeskalandunas.com',
    text: 'Name: ' + req.body['contact-form-name'] + '\n' + 'Subject: ' +
    req.body['contact-form-subject'] + '\n' + 'Body: ' +
    req.body['contact-form-message'] + '\n' + '\n' + 'You may contact this sender at: ' +
    req.body['contact-form-mail']
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Message sent: ' + info.response);
    }
  });

  res.send(true);
});
