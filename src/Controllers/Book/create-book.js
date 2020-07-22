'use strict';

import moment from 'moment/moment';

import { Book } from '../../Models/Book';

module.exports = async (req, res, next) => {
  const {
    id,
    name,
    original_name,
    title,
    description,
    icon,
    authors,
    languages,
    publisher,
    publish_day,
    summary,
    categories,
    series,
    image_url,
    book_url,
  } = req.body;

  if (!name) {
    return next('Missing parameters: name');
  }

  const time_now = moment().unix();
  const date_string = moment().format('DD-MM-YYYY');
  const book = await Book.insertMany([
    {
      id,
      name,
      original_name,
      title,
      description,
      icon,
      authors,
      languages,
      publisher,
      publish_day,
      summary,
      categories,
      series,
      image_url,
      book_url,
      create_at: time_now,
      update_at: time_now,
      updated_at_string: date_string
    }
  ]);

  return res.json({
    status: 'OK',
    data: book
  });
}