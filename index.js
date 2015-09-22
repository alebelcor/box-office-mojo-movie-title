'use strict';

var cheerio = require('cheerio');

function stripHTML(title) {
  return title
    .replace('<br>', ' ')
    .trim();
}

function getMovieTitle($) {
  var collection = $('td > font > b');
  var titleElement = collection.first();

  if (collection.length < 11 || titleElement == null) {
    throw new Error('Movie title was not found.');
  }

  return stripHTML(titleElement.html());
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
