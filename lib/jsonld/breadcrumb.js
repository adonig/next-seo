'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _react = _interopRequireDefault(require('react')),
  _head = _interopRequireDefault(require('next/head')),
  _markup = _interopRequireDefault(require('../utils/markup')),
  BreadCrumbJsonLd = function(a) {
    var b = a.itemListElements,
      c = void 0 === b ? [] : b,
      d = '{\n    "@context": "http://schema.org",\n    "@type": "BreadcrumbList",\n    "itemListElement": [\n      '.concat(
        c.map(function(a) {
          return '{\n        "@type": "ListItem",\n        "position": '
            .concat(a.position, ',\n        "name": "')
            .concat(a.name, '",\n        "item": "')
            .concat(a.item, '"\n      }');
        }),
        '\n     ]\n  }',
      );
    return _react['default'].createElement(
      _head['default'],
      null,
      _react['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: (0, _markup['default'])(d),
        key: 'jsonld-breadcrumb',
      }),
    );
  },
  _default = BreadCrumbJsonLd;
exports['default'] = _default;
