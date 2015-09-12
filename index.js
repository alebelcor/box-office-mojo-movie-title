'use strict';

var cheerio = require('cheerio');

module.exports = function (html) {
  var $;

  if (typeof html !== 'string') {
    throw new Error('Parameter must be a string of HTML');
  }

  $ = cheerio.load(html);

  return $('td > table:nth-child(1) > tbody > tr > td:nth-child(2) > font > b').text();
};
