const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const IphoneSchema = new Schema({
  name: { type: String, required: true },
  param: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true, default: 0 },
  year: { type:Number, required:true },
  categoryId: { type: ObjectId, ref: 'category' }
}); 

module.exports = mongoose.model('iphone', IphoneSchema);

