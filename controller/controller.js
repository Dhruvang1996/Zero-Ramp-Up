const UserTable = require('../models/User');
const ProductTable = require('../models/Product');
const OrderTable = require('../models/Order');

exports.getOrder = async (req, res) => {
  try {
    if (!req.body.firstName || !req.body.lastName || !req.body.phoneNumber) {
      return res.status(400).json({ error: 'the request data is invalid or not clean' });
    }
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    };
    let user = await UserTable.find({ phoneNumber: userData.phoneNumber });
    if (!user.length) {
      user = await UserTable.create(userData);
    }
    const product = await ProductTable.find({ productId: req.body.productId });
    if (!product.length) {
      return res.status(400).json({ error: `product with productId ${req.body.productId} not found` });
    }
    const order = await OrderTable.create({ user: user[0]._id, product: product[0]._id });
    if (user.length && order) {
      return res.status(200).send('a user is successfully found or created, and an order object is created');
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
