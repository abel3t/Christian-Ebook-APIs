const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, trim: true },
  original_name: { type: String, trim: true, default: '' },
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  icon: { type: String, trim: true, default: '' },
  authors: { type: Array },
  language: { type: String, trim: true },
  publisher: { type: String },
  publish_day: { type: String, trim: true },
  summary: { type: String, trim: true },
  categories: { type: Array },
  view: { type: Number, default: 0 },
  download: { type: Number, default: 0 },
  series: { type: Array },
  issues: { type: Array },
  image_url: { type: String, trim: true },
  book_url: { type: String, trim: true },
  create_at: { type: Number },
  updated_at: { type: Number },
  updated_at_string: { type: String, trim: true },
  status: { type: Boolean, default: true }
});

module.exports = {
  Book: mongoose.model('Book', schema, 'books')
}