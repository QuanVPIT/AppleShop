const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 0 },
  quantity: { type: Number, required: true, default: 0 },
  image: { type: String, required: true },
  description: { type: String, required: true },
  categoryId: { type: ObjectId, ref: 'category' }
}); 

module.exports = mongoose.model('product', ProductSchema);

