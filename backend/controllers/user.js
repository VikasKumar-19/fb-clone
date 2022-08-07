const { validateEmail, validateLength, validateUserName } = require('../helpers/validation');
const User = require('../models/User');
const bcrypt = require("bcrypt");
const { generateToken } = require('../helpers/tokens');
const { sendVerificationEmail } = require('../helpers/mailer');
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {

  try{
    const {
      first_name,
      last_name,
      email, username,
      password,
      bYear, bMonth, bDay,
      gender
    } = req.body;

    if(!validateEmail(email)){
      return res.status(400).json({message: "invalid email address"})
    }

    const check = await User.findOne({email});

    if(check){
      return res.status(400).json({message: "This email address already exists, try with a different email address"});
    }

    if(!validateLength(first_name, 3, 30)){
      return res.status(400).json({message: "first name must be between 3 and 30 characters."})
    }
    if(!validateLength(last_name, 3, 30)){
      return res.status(400).json({message: "last name must be between 3 and 30 characters."})
    }
    if(!validateLength(password, 6, 40)){
      return res.status(400).json({message: "password must be atleast 6 characters"})
    }

    const cryptedPassword = await bcrypt.hash(password, 12)
    let tempUserName = first_name + last_name;
    if(username){
      tempUserName = username
    }
    let newUserName = await validateUserName(tempUserName);
    const user = await new User({
      first_name,
      last_name,
      email, username: newUserName,
      password: cryptedPassword,
      bYear, bMonth, bDay,
      gender
    }).save();
    const emailVerificationToken = generateToken({id: user._id.toString()}, '30m');
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`
    const mailerRes = await sendVerificationEmail(user.email, user.first_name, url);
    const token = generateToken({id: user._id.toString()}, '7d');
    res.json({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: 'Register success! please activate your email to start'
    });
  }

  catch(err){
    res.status(500).json({message:err.message});
  }

}

exports.activateAccount = async (req, res)=>{
  try{
    const {token} = req.body;
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const check = await User.findById(user.id)
    if(check.verified === true){
      return res.status(400).json({status: "activated", message: 'This email is already activated'})
    }
    else{
      await User.findByIdAndUpdate(user.id, {verified: true});
      return res.status(200).json({status: "success", message: "Account has been activated successfully"})
    }
  }
  catch(err){
    res.status(500).json({status: 'failed', message:err.message});
  }
}

exports.login = async (req, res)=>{
  try{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({success: false, message: "This email is not registered"});
    }
    const check = await bcrypt.compare(password, user.password);
    if(!check){
      return res.status(400).json({success: false, message: "Invalid email or password entered"});
    }
    else{
      const token = generateToken({id: user._id.toString()}, '7d');
      res.json({
        id: user._id,
        username: user.username,
        picture: user.picture,
        first_name: user.first_name,
        last_name: user.last_name,
        token: token,
        verified: user.verified,
        success: true,
        message: 'Login successful'
      });
    }
  }
  catch(err){
    res.status(500).json({message:err.message});
  }
}