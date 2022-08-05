const User = require("../models/User");

exports.validateEmail = (email) => {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

exports.validateLength = (text, min, max) => {
  if (text.length >= min && text.length <= max) {
    return true;
  }
  return false;
}

exports.validateUserName = async(userName)=>{
  let flag = false;
  let finalUserName = userName;
  do{
    let isUserNameExist = await User.findOne({username:finalUserName});
    if(isUserNameExist){
      finalUserName = userName + (new Date().getTime() * Math.random()).toString().substring(0,1);
      console.log(finalUserName, "name");
      flag = false;
    }
    else{
      flag = true;
    }

  }
  while(!flag);

  return finalUserName;
}
