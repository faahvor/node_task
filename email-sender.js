const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tinafavour2018@gmail.com',
    pass: 'Favour$1234',
  },
});

const mailOptions = {
  from: 'tinafavour2018@gmail.com',
  to: 'tinafvour2018@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
