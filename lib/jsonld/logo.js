'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _react = _interopRequireDefault(require('react')),
  _head = _interopRequireDefault(require('next/head')),
  _markup = _interopRequireDefault(require('../utils/markup')),
  LogoJsonLd = function(a) {
    var b = a.url,
      c = a.logo,
      d = '{\n    "@context": "http://schema.org",\n    "@type": "Organization",\n    "url": "'
        .concat(b, '",\n    "logo": "')
        .concat(c, '"\n  }');
    return _react['default'].createElement(
      _head['default'],
      null,
      _react['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: (0, _markup['default'])(d),
        key: 'jsonld-logo',
      }),
    );
  },
  _default = LogoJsonLd;
exports['default'] = _default;
