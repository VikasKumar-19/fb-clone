const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const UserSchema = mongoose.Schema({
  first_name: {
    type: String,
    require: [true, "first name is required"], //validation
    trim: true,
    text: true,
  },
  last_name: {
    type: String,
    require: [true, "last name is required"],
    trim: true,
    text: true,
  },
  username: {
    type: String,
    require: [true, "username name is required"],
    trim: true,
    text: true,
    unique: true
  },
  email: {
    type: String,
    require: [true, "email is required"],
    trim: true,
  },
  password: {
    type: String,
    require: [true, "password is required"],
  },
  picture: {
    type: String,
    default: "https://res.cloudinary.com/demo/image/upload/d_avatar.png/non_existing_id.png",
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
    required: [true, "gender is required"]
  },
  bYear: {
    type: Number,
    require: true,
    trim: true,
  },
  bMonth: {
    type: Number,
    require: true,
    trim: true,
  },
  bDay: {
    type: Number,
    require: true,
    trim: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  friends: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  requests: {
    type: Array,
    default: [],
  },
  search: [                      //we are storing search history results like array of users user will be populated through ObjectId
    {                           //as we have referenced the User schema itself for the objectId
      user: {
        type: ObjectId,
        ref: 'User'
      }
    }
  ],
  details: {
    bio: {
      type: String,
    },
    otherName: {
      type: String,
    },
    job: {
      type: String,
    },
    workplace: {
      type: String,
    },
    highSchool: {
      type: String,
    },
    college: {
      type: String,
    },
    currentCity: {
      type: String,
    },
    homeTown: {
      type: String,
    },
    relationship: {
      type: String,
      enum: ['Single', 'In a relationship', 'Married', 'Divorced']
    },
    instagram: {
      type: String,
    }
  },
  savePosts: [
    {
      post: {
        type: ObjectId,
        ref: 'Post'
      },
      savedAt: {
        type: Date,
        default: new Date()
      }
    }
  ],

}, {
  timestamps: true,
})

module.exports = mongoose.model('User', UserSchema)