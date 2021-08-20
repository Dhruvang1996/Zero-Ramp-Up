const mongoose = require('../db');

const productSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      trim: true,
      required: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    productCost: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('ProductTable', productSchema);
