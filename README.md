# egg-probe

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-probe.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-probe
[travis-image]: https://img.shields.io/travis/eggjs/egg-probe.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-probe
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-probe.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-probe?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-probe.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-probe
[snyk-image]: https://snyk.io/test/npm/egg-probe/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-probe
[download-image]: https://img.shields.io/npm/dm/egg-probe.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-probe

<!--
Description here.
-->

## Install

```bash
$ npm i egg-probe --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.probe = {
  enable: true,
  package: 'egg-probe',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.probe = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
