'use strict';
var _interopRequireWildcard = require('@babel/runtime-corejs2/helpers/interopRequireWildcard'),
  _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _classCallCheck2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/classCallCheck'),
  ),
  _createClass2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/createClass'),
  ),
  _possibleConstructorReturn2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/possibleConstructorReturn'),
  ),
  _getPrototypeOf2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/getPrototypeOf'),
  ),
  _inherits2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/inherits'),
  ),
  _head = _interopRequireDefault(require('next/head')),
  _react = _interopRequireWildcard(require('react')),
  _buildTags = _interopRequireDefault(require('./buildTags')),
  _default = /*#__PURE__*/ (function(a) {
    function b() {
      return (
        (0, _classCallCheck2['default'])(this, b),
        (0, _possibleConstructorReturn2['default'])(
          this,
          (0, _getPrototypeOf2['default'])(b).apply(this, arguments),
        )
      );
    }
    return (
      (0, _inherits2['default'])(b, a),
      (0, _createClass2['default'])(b, [
        {
          key: 'render',
          value: function render() {
            var a = this.props,
              b = a.title,
              c = a.noindex,
              d = a.description,
              e = a.canonical,
              f = a.openGraph,
              g = a.facebook,
              h = a.twitter,
              i = a.additionalMetaTags,
              j = a.titleTemplate;
            return _react['default'].createElement(
              _head['default'],
              null,
              (0, _buildTags['default'])({
                title: b,
                noindex: void 0 !== c && c,
                description: d,
                canonical: e,
                facebook: g,
                openGraph: f,
                additionalMetaTags: i,
                twitter: h,
                titleTemplate: j,
              }),
            );
          },
        },
      ]),
      b
    );
  })(_react.Component);
exports['default'] = _default;
