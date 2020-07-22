'use strict';

import { Book } from '../../Models/Book';

module.exports = async (req, res, next) => {
  const books = await Book.find();
  return res.json({
    status: 'OK',
    data: books
  });
}