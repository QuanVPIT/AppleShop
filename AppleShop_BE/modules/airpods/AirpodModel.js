const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AirpodSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  year: {type: Number, require: true},
  categoryId: { type: ObjectId, ref: 'category' }
}); 

module.exports = mongoose.model('airpod', AirpodSchema);

