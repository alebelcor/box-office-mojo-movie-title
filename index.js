'use strict';

var cheerio = require('cheerio');

function stripHTML(text) {
  var title = text;

  if (title == null) {
    title = '';
  }

  return title
    .replace('<br>', ' ')
    .trim();
}

function getMovieTitle($) {
  return stripHTML($('td > table:nth-child(1) > tbody > tr > td:nth-child(2) > font > b').html());
}

module.exports = function (html) {
  var $;
  var movieTitle;

  if (typeof html !== 'string') {
    throw new Error('Parameter must be a string of HTML');
  }

  $ = cheerio.load(html);
  movieTitle = getMovieTitle($);

  if (movieTitle.length === 0) {
    throw new Error('Movie title was not found.');
  }

  return movieTitle;
};
