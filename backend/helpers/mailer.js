const nodemailer = require("nodemailer");
const { google } = require('googleapis');
const {OAuth2} = google.auth;
const oath_link = "https://developers.google.com/oauthplayground";

const {EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET} = process.env;

const auth = new OAuth2(MAILING_ID, MAILING_SECRET, oath_link);

auth.setCredentials({
  refresh_token: MAILING_REFRESH,
});

exports.sendVerificationEmail = async (email, name, url)=>{
  try{
    const accessToken = await auth.getAccessToken();
    const stmp = nodemailer.createTransport({
      service: "gmail",
      auth:{
        type: "OAuth2",
        user: EMAIL,
        clientId: MAILING_ID,
        clientSecret: MAILING_SECRET,
        refreshToken: MAILING_REFRESH,
        accessToken
      }
    })
  
    const mailOptions = {
      from: `facebook-social-app4u 🤗`,
      to: email,
      subject: "Facebook Email Verification",
      html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998"><img src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338508_960_720.png" alt="fb logo" style="width:30px"><span>Action Required: Activate your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on Facebook. To complete your registration please confirm your account</span></div><a style="width:200px;padding:10px 15px;background:#4c649b;color:white;text-decoration:none;font-weight:600" href=${url}>Confirm your account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c">Facbook allows you to stay in touch with all your friends and family, once registered on facebook, you can share photos, organize events and much more.</span></div></div>`
    }
  
    const result = await stmp.sendMail(mailOptions);
    return result;
  }
  catch(err){
   console.log(err);
  }
}
