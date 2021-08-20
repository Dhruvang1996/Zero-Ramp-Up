const mongoose = require('../db');

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      minLength: [3, 'Name is too short!'],
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      minLength: [3, 'Last name is too short!'],
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      minLength: [10, 'LNumber should be 10 digit'],
      maxLength: 10,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('UserTable', userSchema);
