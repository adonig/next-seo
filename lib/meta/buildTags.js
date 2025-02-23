'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _Object$defineProperty = require('@babel/runtime-corejs2/core-js/object/define-property');
_Object$defineProperty(exports, '__esModule', { value: !0 }),
  (exports['default'] = void 0);
var _extends2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/extends'),
  ),
  _react = _interopRequireDefault(require('react')),
  defaults = {
    templateTitle: '',
    noindex: !1,
    defaultOpenGraphImageWidth: 0,
    defaultOpenGraphImageHeight: 0,
    defaultOpenGraphVideoWidth: 0,
    defaultOpenGraphVideoHeight: 0,
  },
  buildTags = function(a) {
    var b = [];
    a.titleTemplate && (defaults.templateTitle = a.titleTemplate);
    var c = '';
    if (
      (a.title &&
        ((c = a.title),
        defaults.templateTitle &&
          (c = defaults.templateTitle.replace(/%s/g, function() {
            return c;
          })),
        b.push(_react['default'].createElement('title', { key: 'title' }, c))),
      !1 === a.noindex
        ? (b.push(
            _react['default'].createElement('meta', {
              key: 'robots',
              name: 'robots',
              content: 'index,follow',
            }),
          ),
          b.push(
            _react['default'].createElement('meta', {
              key: 'googlebot',
              name: 'googlebot',
              content: 'index,follow',
            }),
          ))
        : a.noindex || defaults.noindex || a.dangerouslySetAllPagesToNoIndex
        ? (a.dangerouslySetAllPagesToNoIndex && (defaults.noindex = !0),
          b.push(
            _react['default'].createElement('meta', {
              key: 'robots',
              name: 'robots',
              content: 'noindex,nofollow',
            }),
          ),
          b.push(
            _react['default'].createElement('meta', {
              key: 'googlebot',
              name: 'googlebot',
              content: 'noindex,nofollow',
            }),
          ))
        : (b.push(
            _react['default'].createElement('meta', {
              key: 'robots',
              name: 'robots',
              content: 'index,follow',
            }),
          ),
          b.push(
            _react['default'].createElement('meta', {
              key: 'googlebot',
              name: 'googlebot',
              content: 'index,follow',
            }),
          )),
      a.description &&
        b.push(
          _react['default'].createElement('meta', {
            key: 'description',
            name: 'description',
            content: a.description,
          }),
        ),
      a.twitter &&
        (a.twitter.cardType &&
          b.push(
            _react['default'].createElement('meta', {
              key: 'twitter:card',
              name: 'twitter:card',
              content: a.twitter.cardType,
            }),
          ),
        a.twitter.site &&
          b.push(
            _react['default'].createElement('meta', {
              key: 'twitter:site',
              name: 'twitter:site',
              content: a.twitter.site,
            }),
          ),
        a.twitter.handle &&
          b.push(
            _react['default'].createElement('meta', {
              key: 'twitter:creator',
              name: 'twitter:creator',
              content: a.twitter.handle,
            }),
          )),
      a.facebook &&
        a.facebook.appId &&
        b.push(
          _react['default'].createElement('meta', {
            key: 'fb:app_id',
            property: 'fb:app_id',
            content: a.facebook.appId,
          }),
        ),
      a.openGraph)
    ) {
      if (
        ((a.openGraph.url || a.canonical) &&
          b.push(
            _react['default'].createElement('meta', {
              key: 'og:url',
              property: 'og:url',
              content: a.openGraph.url || a.canonical,
            }),
          ),
        a.openGraph.type)
      ) {
        var d = a.openGraph.type.toLowerCase();
        b.push(
          _react['default'].createElement('meta', {
            key: 'og:type',
            property: 'og:type',
            content: d,
          }),
        ),
          'profile' === d && a.openGraph.profile
            ? (a.openGraph.profile.firstName &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'profile:first_name',
                    property: 'profile:first_name',
                    content: a.openGraph.profile.firstName,
                  }),
                ),
              a.openGraph.profile.lastName &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'profile:last_name',
                    property: 'profile:last_name',
                    content: a.openGraph.profile.lastName,
                  }),
                ),
              a.openGraph.profile.username &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'profile:username',
                    property: 'profile:username',
                    content: a.openGraph.profile.username,
                  }),
                ),
              a.openGraph.profile.gender &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'profile:gender',
                    property: 'profile:gender',
                    content: a.openGraph.profile.gender,
                  }),
                ))
            : 'book' === d && a.openGraph.book
            ? (a.openGraph.book.authors &&
                a.openGraph.book.authors.length &&
                a.openGraph.book.authors.forEach(function(a, c) {
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'book:author:0'.concat(c),
                      property: 'book:author',
                      content: a,
                    }),
                  );
                }),
              a.openGraph.book.isbn &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'book:isbn',
                    property: 'book:isbn',
                    content: a.openGraph.book.isbn,
                  }),
                ),
              a.openGraph.book.releaseDate &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'book:release_date',
                    property: 'book:release_date',
                    content: a.openGraph.book.releaseDate,
                  }),
                ),
              a.openGraph.book.tags &&
                a.openGraph.book.tags.length &&
                a.openGraph.book.tags.forEach(function(a, c) {
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'book:tag:0'.concat(c),
                      property: 'book:tag',
                      content: a,
                    }),
                  );
                }))
            : 'article' === d && a.openGraph.article
            ? (a.openGraph.article.publishedTime &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'article:published_time',
                    property: 'article:published_time',
                    content: a.openGraph.article.publishedTime,
                  }),
                ),
              a.openGraph.article.modifiedTime &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'article:modified_time',
                    property: 'article:modified_time',
                    content: a.openGraph.article.modifiedTime,
                  }),
                ),
              a.openGraph.article.expirationTime &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'article:expiration_time',
                    property: 'article:expiration_time',
                    content: a.openGraph.article.expirationTime,
                  }),
                ),
              a.openGraph.article.authors &&
                a.openGraph.article.authors.length &&
                a.openGraph.article.authors.forEach(function(a, c) {
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'article:author:0'.concat(c),
                      property: 'article:author',
                      content: a,
                    }),
                  );
                }),
              a.openGraph.article.section &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'article:section',
                    property: 'article:section',
                    content: a.openGraph.article.section,
                  }),
                ),
              a.openGraph.article.tags &&
                a.openGraph.article.tags.length &&
                a.openGraph.article.tags.forEach(function(a, c) {
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'article:tag:0'.concat(c),
                      property: 'article:tag',
                      content: a,
                    }),
                  );
                }))
            : ('video.movie' === d ||
                'video.episode' === d ||
                'video.tv_show' === d ||
                'video.other' === d) &&
              a.openGraph.video &&
              (a.openGraph.video.actors &&
                a.openGraph.video.actors.length &&
                a.openGraph.video.actors.forEach(function(a, c) {
                  a.profile &&
                    b.push(
                      _react['default'].createElement('meta', {
                        key: 'video:actor:0'.concat(c),
                        property: 'video:actor',
                        content: a.profile,
                      }),
                    ),
                    a.role &&
                      b.push(
                        _react['default'].createElement('meta', {
                          key: 'video:actor:role:0'.concat(c),
                          property: 'video:actor:role',
                          content: a.role,
                        }),
                      );
                }),
              a.openGraph.video.directors &&
                a.openGraph.video.directors.length &&
                a.openGraph.video.directors.forEach(function(a, c) {
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'video:director:0'.concat(c),
                      property: 'video:director',
                      content: a,
                    }),
                  );
                }),
              a.openGraph.video.writers &&
                a.openGraph.video.writers.length &&
                a.openGraph.video.writers.forEach(function(a, c) {
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'video:writer:0'.concat(c),
                      property: 'video:writer',
                      content: a,
                    }),
                  );
                }),
              a.openGraph.video.duration &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'video:duration',
                    property: 'video:duration',
                    content: a.openGraph.video.duration.toString(),
                  }),
                ),
              a.openGraph.video.releaseDate &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'video:release_date',
                    property: 'video:release_date',
                    content: a.openGraph.video.releaseDate,
                  }),
                ),
              a.openGraph.video.tags &&
                a.openGraph.video.tags.length &&
                a.openGraph.video.tags.forEach(function(a, c) {
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'video:tag:0'.concat(c),
                      property: 'video:tag',
                      content: a,
                    }),
                  );
                }),
              a.openGraph.video.series &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'video:series',
                    property: 'video:series',
                    content: a.openGraph.video.series,
                  }),
                ));
      }
      (a.openGraph.title || a.title) &&
        b.push(
          _react['default'].createElement('meta', {
            key: 'og:title',
            property: 'og:title',
            content: a.openGraph.title || c,
          }),
        ),
        (a.openGraph.description || a.description) &&
          b.push(
            _react['default'].createElement('meta', {
              key: 'og:description',
              property: 'og:description',
              content: a.openGraph.description || a.description,
            }),
          ),
        a.defaultOpenGraphImageWidth &&
          (defaults.defaultOpenGraphImageWidth = a.defaultOpenGraphImageWidth),
        a.defaultOpenGraphImageHeight &&
          (defaults.defaultOpenGraphImageHeight =
            a.defaultOpenGraphImageHeight),
        a.openGraph.images &&
          a.openGraph.images.length &&
          a.openGraph.images.forEach(function(a, c) {
            b.push(
              _react['default'].createElement('meta', {
                key: 'og:image:0'.concat(c),
                property: 'og:image',
                content: a.url,
              }),
            ),
              a.alt &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'og:image:alt0'.concat(c),
                    property: 'og:image:alt',
                    content: a.alt,
                  }),
                ),
              a.width
                ? b.push(
                    _react['default'].createElement('meta', {
                      key: 'og:image:width0'.concat(c),
                      property: 'og:image:width',
                      content: a.width.toString(),
                    }),
                  )
                : defaults.defaultOpenGraphImageWidth &&
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'og:image:width0'.concat(c),
                      property: 'og:image:width',
                      content: defaults.defaultOpenGraphImageWidth.toString(),
                    }),
                  ),
              a.height
                ? b.push(
                    _react['default'].createElement('meta', {
                      key: 'og:image:height'.concat(c),
                      property: 'og:image:height',
                      content: a.height.toString(),
                    }),
                  )
                : defaults.defaultOpenGraphImageHeight &&
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'og:image:height'.concat(c),
                      property: 'og:image:height',
                      content: defaults.defaultOpenGraphImageHeight.toString(),
                    }),
                  );
          }),
        a.defaultOpenGraphVideoWidth &&
          (defaults.defaultOpenGraphVideoWidth = a.defaultOpenGraphVideoWidth),
        a.defaultOpenGraphVideoHeight &&
          (defaults.defaultOpenGraphVideoHeight =
            a.defaultOpenGraphVideoHeight),
        a.openGraph.videos &&
          a.openGraph.videos.length &&
          a.openGraph.videos.forEach(function(a, c) {
            b.push(
              _react['default'].createElement('meta', {
                key: 'og:video:0'.concat(c),
                property: 'og:video',
                content: a.url,
              }),
            ),
              a.alt &&
                b.push(
                  _react['default'].createElement('meta', {
                    key: 'og:video:alt0'.concat(c),
                    property: 'og:video:alt',
                    content: a.alt,
                  }),
                ),
              a.width
                ? b.push(
                    _react['default'].createElement('meta', {
                      key: 'og:video:width0'.concat(c),
                      property: 'og:video:width',
                      content: a.width.toString(),
                    }),
                  )
                : defaults.defaultOpenGraphVideoWidth &&
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'og:video:width0'.concat(c),
                      property: 'og:video:width',
                      content: defaults.defaultOpenGraphVideoWidth.toString(),
                    }),
                  ),
              a.height
                ? b.push(
                    _react['default'].createElement('meta', {
                      key: 'og:video:height'.concat(c),
                      property: 'og:video:height',
                      content: a.height.toString(),
                    }),
                  )
                : defaults.defaultOpenGraphVideoHeight &&
                  b.push(
                    _react['default'].createElement('meta', {
                      key: 'og:video:height'.concat(c),
                      property: 'og:video:height',
                      content: defaults.defaultOpenGraphVideoHeight.toString(),
                    }),
                  );
          }),
        a.openGraph.locale &&
          b.push(
            _react['default'].createElement('meta', {
              key: 'og:locale',
              property: 'og:locale',
              content: a.openGraph.locale,
            }),
          ),
        a.openGraph.site_name &&
          b.push(
            _react['default'].createElement('meta', {
              key: 'og:site_name',
              property: 'og:site_name',
              content: a.openGraph.site_name,
            }),
          );
    }
    return (
      a.canonical &&
        b.push(
          _react['default'].createElement('link', {
            rel: 'canonical',
            href: a.canonical,
            key: 'canonical',
          }),
        ),
      a.additionalMetaTags &&
        0 < a.additionalMetaTags.length &&
        a.additionalMetaTags.forEach(function(a) {
          b.push(
            _react['default'].createElement(
              'meta',
              (0, _extends2['default'])(
                { key: a.name ? a.name : a.property },
                a,
              ),
            ),
          );
        }),
      b
    );
  },
  _default = buildTags;
exports['default'] = _default;
