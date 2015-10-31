# box-office-mojo-movie-title

> Get the title of a Box Office Mojo's movie via its HTML.

[![npm version](https://img.shields.io/npm/v/box-office-mojo-movie-title.svg)](https://npmjs.org/package/box-office-mojo-movie-title)
[![Build Status](https://travis-ci.org/alebelcor/box-office-mojo-movie-title.svg)](https://travis-ci.org/alebelcor/box-office-mojo-movie-title)
[![Test Coverage](https://img.shields.io/coveralls/alebelcor/box-office-mojo-movie-title/master.svg)](https://coveralls.io/github/alebelcor/box-office-mojo-movie-title)

## Install

```bash
npm install --save box-office-mojo-movie-title
```

## Usage

```js
var boxOfficeMojoTitle = require('box-office-mojo-movie-title');
var pulpFictionHTML = '<html><head><title>Pulp Fiction (1994) - Box Office Mojo</title></head>/<html>';

boxOfficeMojoTitle(pulpFictionHTML); // 'Pulp Fiction'
```

## API

### boxOfficeMojoTitle(input)

Returns the title of the Box Office Mojo's movie.

#### input

Type: `string`

The full (or partial) HTML of a movie as presented in [Box Office Mojo](http://www.boxofficemojo.com/).

Example: [Pulp Fiction's page in Box Office Mojo](http://www.boxofficemojo.com/movies/?id=pulpfiction.htm)

## License

MIT © Alejandro Beltrán
