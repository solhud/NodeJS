var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sholihulhd81@gmail.com',
        pass:'password'
    }
});

var mailOptions = {
    from:'sholihulhd81@gmail.com',
    to: 'yourfriend@gmail.com',
    subject:'try sending',
    text:'halooooo....'
};

transporter.sendMail(mailOptions, (err,info)=>{
    if(err) throw err;
    console.log('email sent: '+info.response);
})