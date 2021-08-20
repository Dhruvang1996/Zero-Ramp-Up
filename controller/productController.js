const ProductTable = require('../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const product = await ProductTable.insertMany(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
