'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _react = _interopRequireDefault(require('react')),
  _head = _interopRequireDefault(require('next/head')),
  _markup = _interopRequireDefault(require('../utils/markup')),
  SocialProfileJsonLd = function(a) {
    var b = a.type,
      c = a.name,
      d = a.url,
      e = a.sameAs,
      f = void 0 === e ? [] : e,
      g = '{\n    "@context": "http://schema.org",\n    "@type": "'
        .concat(b, '",\n    "name": "')
        .concat(c, '",\n    "url": "')
        .concat(d, '",\n    "sameAs": [\n      ')
        .concat(
          f.map(function(a) {
            return '"'.concat(a, '"');
          }),
          '\n     ]\n  }',
        );
    return _react['default'].createElement(
      _head['default'],
      null,
      _react['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: (0, _markup['default'])(g),
        key: 'jsonld-social',
      }),
    );
  },
  _default = SocialProfileJsonLd;
exports['default'] = _default;
