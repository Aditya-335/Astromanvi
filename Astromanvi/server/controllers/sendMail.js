const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer =require("nodemailer");
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    }
})

const sendMail = expressAsyncHandler(async (req, res) => {
    const {name, dob, phone, email } = req.body;
    console.log(`Name: ${name}, DOB: ${dob}, Email: ${email}, Phone: ${phone}`);

    res.status(200).json({ message: "Form data received successfully!" });
    
    var mailOptions ={
        from:process.env.SMTP_MAIL,
        to:process.env.TO_EMAIL,
        subject:"New Lead Information",
        text: `Name: ${name}\nDOB: ${dob}\nEmail: ${email}\nPhone: ${phone}`,  // Plain text version
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>DOB:</strong> ${dob}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>` // HTML version
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log("Email send succesfully");
        }
    })
})


// const sendMail = async(req, res) => {
//     res.send("I am sending mail");
// };

module.exports = sendMail;