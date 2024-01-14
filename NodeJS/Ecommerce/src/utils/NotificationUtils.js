
const nodemailer = require("nodemailer");

const sendEmail = (emails, subject, html, text)=>{

    const emailIds = emails.join(", ");

    let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"utkarshmalik06@gmail.com",
        pass:"rjjecnytchtftnot"
    }});


    let mailDetails = {
        from :"utkarshmalik06@gmail.com",
        to:emailIds,
        subject:subject
    }

    if(html){
        mailDetails.html=html;
    }

    if(text){
        mailDetails.text=text;
    }

    transporter.sendMail(mailDetails, function(err,data){

        if(err){
            console.log("Unable to send email");
        }else{
            console.log(`Email Sent successfully to ${emailIds} `)
        }
    })
}


module.exports = {
    sendEmail
}