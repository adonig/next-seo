'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _react = _interopRequireDefault(require('react')),
  _head = _interopRequireDefault(require('next/head')),
  _markup = _interopRequireDefault(require('../utils/markup')),
  _formatIfArray = _interopRequireDefault(require('../utils/formatIfArray')),
  buildBrand = function(a) {
    return '\n  "brand": {\n      "@type": "Thing",\n      "name": "'.concat(
      a,
      '"\n    },\n',
    );
  },
  buildReviewRating = function(a) {
    return a
      ? '"reviewRating": {\n          "@type": "Rating",\n          '
          .concat(
            a.bestRating ? '"bestRating": "'.concat(a.bestRating, '",') : '',
            '\n          ',
          )
          .concat(
            a.worstRating ? '"worstRating": "'.concat(a.worstRating, '",') : '',
            '\n          "ratingValue": "',
          )
          .concat(a.ratingValue, '"\n        },')
      : '';
  },
  buildReviews = function(a) {
    return '\n"review": [\n  '.concat(
      a.map(function(a) {
        return '{\n      "@type": "Review",\n      '
          .concat(
            a.datePublished
              ? '"datePublished": "'.concat(a.datePublished, '",')
              : '',
            '\n      ',
          )
          .concat(
            a.reviewBody ? '"reviewBody": "'.concat(a.reviewBody, '",') : '',
            '\n      ',
          )
          .concat(a.name ? '"name": "'.concat(a.name, '",') : '', '\n      ')
          .concat(buildReviewRating(a.reviewRating), '\n      "author": "')
          .concat(a.author, '"\n  }');
      }),
      '],',
    );
  },
  buildAggregateRating = function(a) {
    return '\n  "aggregateRating": {\n      "@type": "AggregateRating",\n      "ratingValue": "'
      .concat(a.ratingValue, '",\n      "reviewCount": "')
      .concat(a.reviewCount, '"\n    },\n');
  },
  buildOffer = function(a) {
    return '\n  "offers": {\n    "@type": "Offer",\n    "priceCurrency": "'
      .concat(a.priceCurrency, '",\n    ')
      .concat(
        a.priceValidUntil
          ? '"priceValidUntil": "'.concat(a.priceValidUntil, '",')
          : '',
        '\n    ',
      )
      .concat(
        a.itemCondition
          ? '"itemCondition": "'.concat(a.itemCondition, '",')
          : '',
        '\n    ',
      )
      .concat(
        a.availability ? '"availability": "'.concat(a.availability, '",') : '',
        '\n    ',
      )
      .concat(
        a.seller
          ? '\n      "seller": {\n      "@type": "Organization",\n      "name": "'.concat(
              a.seller.name,
              '"\n    },\n    ',
            )
          : '',
        '\n    "price": "',
      )
      .concat(a.price, '"\n  },\n');
  },
  buildAggregateOffer = function(a) {
    return '\n  "offers": {\n      "@type": "AggregateOffer",\n      "lowPrice": "'
      .concat(a.lowPrice, '",\n      "priceCurrency": "')
      .concat(a.priceCurrency, '",\n      ')
      .concat(
        a.offerCount ? '"offerCount": "'.concat(a.offerCount, '",') : '',
        '\n      ',
      )
      .concat(
        a.highPrice ? '"highPrice": "'.concat(a.highPrice, '",') : '',
        '\n    },\n',
      );
  };
function isAggregateOffer(a) {
  return a.lowPrice !== void 0;
}
var buildOffers = function(a) {
    return isAggregateOffer(a) ? buildAggregateOffer(a) : buildOffer(a);
  },
  ProductJsonLd = function(a) {
    var b = a.productName,
      c = a.images,
      d = void 0 === c ? [] : c,
      e = a.description,
      f = a.sku,
      g = a.gtin8,
      h = a.gtin13,
      i = a.gtin14,
      j = a.mpn,
      k = a.brand,
      l = a.reviews,
      m = void 0 === l ? [] : l,
      n = a.aggregateRating,
      o = a.offers,
      p = '{\n    "@context": "http://schema.org/",\n    "@type": "Product",\n    "image":'
        .concat((0, _formatIfArray['default'])(d), ',\n    ')
        .concat(e ? '"description": "'.concat(e, '",') : '', '\n    ')
        .concat(j ? '"mpn": "'.concat(j, '",') : '', '\n    ')
        .concat(f ? '"sku": "'.concat(f, '",') : '', '\n    ')
        .concat(g ? '"gtin8": "'.concat(g, '",') : '', '\n    ')
        .concat(h ? '"gtin13": "'.concat(h, '",') : '', '\n    ')
        .concat(i ? '"gtin14": "'.concat(i, '",') : '', '\n    ')
        .concat(k ? buildBrand(k) : '', '\n    ')
        .concat(m.length ? buildReviews(m) : '', '\n    ')
        .concat(n ? buildAggregateRating(n) : '', '\n    ')
        .concat(o ? buildOffers(o) : '', '\n    "name": "')
        .concat(b, '"\n  }');
    return _react['default'].createElement(
      _head['default'],
      null,
      _react['default'].createElement('script', {
        type: 'application/ld+json',
        dangerouslySetInnerHTML: (0, _markup['default'])(p),
        key: 'jsonld-product',
      }),
    );
  },
  _default = ProductJsonLd;
exports['default'] = _default;
