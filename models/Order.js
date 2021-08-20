const { Schema } = require('mongoose');
const mongoose = require('../db');
const Product = require('./Product');
const User = require('./User');

const orderSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: Product,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('OrderTable', orderSchema);
