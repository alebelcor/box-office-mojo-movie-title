'use strict';

var cheerio = require('cheerio');

function getCleanTitle(title) {
  return title.split('(')[0]
    .trim();
}

function getMovieTitle($) {
  var titleElement = $('title').first();

  if (titleElement.length === 0) {
    throw new Error('Movie title was not found.');
  }

  return getCleanTitle(titleElement.text());
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
