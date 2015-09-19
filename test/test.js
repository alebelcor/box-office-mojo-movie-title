'use strict';

var fs = require('fs');
var path = require('path');

var test = require('ava');
var boxOfficeMojoMovieTitle = require('../');

var FIXTURE_DIR = path.join(process.cwd(), 'test/fixture');

test('it should get the title when given full HTML', function (t) {
  var fixture = fs.readFileSync(path.join(FIXTURE_DIR, 'full.html'), 'utf8');

  t.same('Pulp Fiction', boxOfficeMojoMovieTitle(fixture));
  t.end();
});

test('it should get the title when given partial HTML', function (t) {
  var fixture = fs.readFileSync(path.join(FIXTURE_DIR, 'partial.html'), 'utf8');

  t.same('Pulp Fiction', boxOfficeMojoMovieTitle(fixture));
  t.end();
});

test('it should return a string', function (t) {
  var fixture = fs.readFileSync(path.join(FIXTURE_DIR, 'partial.html'), 'utf8');

  t.same('string', typeof boxOfficeMojoMovieTitle(fixture));
  t.end();
});

test('it should throw an error when there\'s no title or it can\'t find it', function (t) {
  var fixture = fs.readFileSync(path.join(FIXTURE_DIR, 'no-title.html'), 'utf8');

  t.throws(function () { return boxOfficeMojoMovieTitle(); });
  t.end();
});

test('it should throw an error when nothing was passed in', function (t) {
  t.throws(function () { return boxOfficeMojoMovieTitle(); });
  t.end();
});
