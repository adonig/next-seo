'use strict';
var _interopRequireDefault = require('@babel/runtime-corejs2/helpers/interopRequireDefault'),
  _objectSpread2 = _interopRequireDefault(
    require('@babel/runtime-corejs2/helpers/objectSpread'),
  ),
  _from = _interopRequireDefault(
    require('@babel/runtime-corejs2/core-js/array/from'),
  ),
  _react = _interopRequireDefault(require('react')),
  _reactTestingLibrary = require('react-testing-library'),
  _buildTags = _interopRequireDefault(require('../buildTags'));
afterEach(_reactTestingLibrary.cleanup);
var SEO = {
  title: 'This is a test title.',
  description: 'This is a test description.',
  canonical: 'https://www.canonical.ie',
  defaultOpenGraphImageHeight: 1200,
  defaultOpenGraphImageWidth: 1200,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie',
    title: 'Open graph title',
    description: 'This is testing og:description.',
    images: [
      {
        url: 'https://www.test.ie/image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Alt text right here',
      },
      { url: 'https://www.test.ie/image-02.jpg' },
      { url: 'https://www.test.ie/image-03.jpg' },
      { url: 'https://www.test.ie/image-04.jpg' },
    ],
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  facebook: { appId: '1234567890' },
};
it('renders correctly', function() {
  var a = (0, _buildTags['default'])(SEO),
    b = (0, _reactTestingLibrary.render)(
      _react['default'].createElement(
        _react['default'].Fragment,
        null,
        _react['default'].Children.toArray(a),
      ),
    ),
    c = b.container;
  expect(c).toMatchSnapshot();
}),
  it('returns full array for default seo object', function() {
    var a = (0, _buildTags['default'])(SEO),
      b = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(a),
        ),
      ),
      c = b.container,
      d = (0, _reactTestingLibrary.getByText)(c, function(a, b) {
        return (
          'title' === b.tagName.toLowerCase() &&
          a.startsWith(''.concat(SEO.title))
        );
      }),
      e = c.querySelectorAll('meta[content="index,follow"]'),
      f = c.querySelectorAll('meta[content="'.concat(SEO.description, '"]')),
      g = c.querySelectorAll('meta[name="description"]'),
      h = c.querySelectorAll('meta[content="summary_large_image"]'),
      i = c.querySelectorAll('meta[property="fb:app_id"]'),
      j = c.querySelectorAll('meta[name="twitter:card"]'),
      k = c.querySelectorAll('meta[content="'.concat(SEO.twitter.handle, '"]')),
      l = c.querySelectorAll('meta[name="twitter:creator"]'),
      m = c.querySelectorAll('meta[content="'.concat(SEO.twitter.site, '"]')),
      n = c.querySelectorAll('meta[name="twitter:site"]'),
      o = c.querySelectorAll('meta[content="'.concat(SEO.openGraph.url, '"]')),
      p = c.querySelectorAll('meta[property="og:url"]'),
      q = c.querySelectorAll('meta[content="'.concat(SEO.openGraph.type, '"]')),
      r = c.querySelectorAll('meta[property="og:type"]'),
      s = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.title, '"]'),
      ),
      t = c.querySelectorAll('meta[property="og:title"]'),
      u = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.description, '"]'),
      ),
      v = c.querySelectorAll('meta[property="og:description"]'),
      w = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.images[0].url, '"]'),
      ),
      x = a.filter(function(a) {
        return 'og:image:01' === a.key;
      }),
      y = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.images[1].url, '"]'),
      ),
      z = a.filter(function(a) {
        return 'og:image:01' === a.key;
      }),
      A = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.images[2].url, '"]'),
      ),
      B = a.filter(function(a) {
        return 'og:image:02' === a.key;
      }),
      C = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.images[3].url, '"]'),
      ),
      D = a.filter(function(a) {
        return 'og:image:03' === a.key;
      }),
      E = c.querySelectorAll(
        'meta[content="'.concat(SEO.defaultOpenGraphImageHeight, '"]'),
      ),
      F = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.images[0].height, '"]'),
      ),
      G = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.images[0].width, '"]'),
      ),
      H = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.images[0].alt, '"]'),
      ),
      I = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.locale, '"]'),
      ),
      J = a.filter(function(a) {
        return 'og:locale' === a.key;
      }),
      K = c.querySelectorAll(
        'meta[content="'.concat(SEO.openGraph.site_name, '"]'),
      ),
      L = a.filter(function(a) {
        return 'og:site_name' === a.key;
      }),
      M = a.filter(function(a) {
        return 'canonical' === a.key;
      });
    expect(d).toBeDefined(),
      expect((0, _from['default'])(e).length).toBe(2),
      expect((0, _from['default'])(f).length).toBe(1),
      expect((0, _from['default'])(g).length).toBe(1),
      expect((0, _from['default'])(i).length).toBe(1),
      expect((0, _from['default'])(h).length).toBe(1),
      expect((0, _from['default'])(j).length).toBe(1),
      expect((0, _from['default'])(k).length).toBe(1),
      expect((0, _from['default'])(l).length).toBe(1),
      expect((0, _from['default'])(m).length).toBe(1),
      expect((0, _from['default'])(n).length).toBe(1),
      expect((0, _from['default'])(o).length).toBe(1),
      expect((0, _from['default'])(p).length).toBe(1),
      expect((0, _from['default'])(q).length).toBe(1),
      expect((0, _from['default'])(r).length).toBe(1),
      expect((0, _from['default'])(s).length).toBe(1),
      expect((0, _from['default'])(t).length).toBe(1),
      expect((0, _from['default'])(u).length).toBe(1),
      expect((0, _from['default'])(v).length).toBe(1),
      expect((0, _from['default'])(w).length).toBe(1),
      expect((0, _from['default'])(x).length).toBe(1),
      expect((0, _from['default'])(y).length).toBe(1),
      expect((0, _from['default'])(z).length).toBe(1),
      expect((0, _from['default'])(A).length).toBe(1),
      expect((0, _from['default'])(B).length).toBe(1),
      expect((0, _from['default'])(C).length).toBe(1),
      expect((0, _from['default'])(D).length).toBe(1),
      expect((0, _from['default'])(E).length).toBe(6),
      expect((0, _from['default'])(F).length).toBe(1),
      expect((0, _from['default'])(G).length).toBe(1),
      expect((0, _from['default'])(H).length).toBe(1),
      expect((0, _from['default'])(I).length).toBe(1),
      expect((0, _from['default'])(J).length).toBe(1),
      expect((0, _from['default'])(K).length).toBe(1),
      expect((0, _from['default'])(L).length).toBe(1),
      expect(M[0].props.href).toBe(''.concat(SEO.canonical)),
      expect((0, _from['default'])(M).length).toBe(1);
  }),
  it('correctly sets noindex, nofollow', function() {
    var a = (0, _objectSpread2['default'])({}, SEO, { noindex: !0 }),
      b = (0, _buildTags['default'])(a),
      c = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(b),
        ),
      ),
      d = c.container,
      e = d.querySelectorAll('meta[content="index,follow"]'),
      f = d.querySelectorAll('meta[content="noindex,nofollow"]');
    expect((0, _from['default'])(e).length).toBe(0),
      expect((0, _from['default'])(f).length).toBe(2);
  }),
  it('displays title with titleTemplate integrated', function() {
    var a = (0, _objectSpread2['default'])({}, SEO, {
        titleTemplate: ''.concat('Next SEO', ' | %s'),
      }),
      b = (0, _buildTags['default'])(a),
      c = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(b),
        ),
      ),
      d = c.container,
      e = (0, _reactTestingLibrary.getByText)(d, function(a, b) {
        return 'title' === b.tagName.toLowerCase() && a.startsWith('Next SEO');
      });
    expect(e.innerHTML).toMatch(''.concat('Next SEO', ' | ').concat(SEO.title));
  });
var ArticleSEO = {
  title: 'Article Page Title',
  description: 'Description of article page',
  openGraph: {
    title: 'Open Graph Article Title',
    description: 'Description of open graph article',
    url: 'https://www.example.com/articles/article-title',
    type: 'article',
    article: {
      publishedTime: '2017-06-21T23:04:13Z',
      modifiedTime: '2018-01-21T18:04:43Z',
      expirationTime: '2022-12-21T22:04:11Z',
      authors: [
        'https://www.example.com/authors/@firstnameA-lastnameA',
        'https://www.example.com/authors/@firstnameB-lastnameB',
      ],
      section: 'Section II',
      tags: ['Tag A', 'Tag B'],
    },
    images: [
      {
        url: 'https://www.test.ie/og-image-article-title-01.jpg',
        width: 850,
        height: 650,
        alt: 'Og Image Alt Article Title A',
      },
      {
        url: 'https://www.test.ie/og-image-article-title-02.jpg',
        width: 950,
        height: 850,
        alt: 'Og Image Alt Article Title B',
      },
    ],
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
it('Article SEO renders correctly', function() {
  var a = (0, _buildTags['default'])(ArticleSEO),
    b = (0, _reactTestingLibrary.render)(
      _react['default'].createElement(
        _react['default'].Fragment,
        null,
        _react['default'].Children.toArray(a),
      ),
    ),
    c = b.container;
  expect(c).toMatchSnapshot();
}),
  it('Check article og type meta', function() {
    var a = (0, _buildTags['default'])(ArticleSEO),
      b = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(a),
        ),
      ),
      c = b.container,
      d = c.querySelectorAll(
        'meta[content="'.concat(ArticleSEO.openGraph.type, '"]'),
      ),
      e = c.querySelectorAll('meta[property="og:type"]'),
      f = c.querySelectorAll(
        'meta[content="'.concat(
          ArticleSEO.openGraph.article.publishedTime,
          '"]',
        ),
      ),
      g = c.querySelectorAll('meta[property="article:published_time"]'),
      h = c.querySelectorAll(
        'meta[content="'.concat(
          ArticleSEO.openGraph.article.modifiedTime,
          '"]',
        ),
      ),
      i = c.querySelectorAll('meta[property="article:modified_time"]'),
      j = c.querySelectorAll(
        'meta[content="'.concat(
          ArticleSEO.openGraph.article.expirationTime,
          '"]',
        ),
      ),
      k = c.querySelectorAll('meta[property="article:expiration_time"]'),
      l = c.querySelectorAll(
        'meta[content="'.concat(ArticleSEO.openGraph.article.authors[0], '"]'),
      ),
      m = a.filter(function(a) {
        return 'article:author:00' === a.key;
      }),
      n = c.querySelectorAll(
        'meta[content="'.concat(ArticleSEO.openGraph.article.authors[1], '"]'),
      ),
      o = a.filter(function(a) {
        return 'article:author:01' === a.key;
      }),
      p = c.querySelectorAll(
        'meta[content="'.concat(ArticleSEO.openGraph.article.section, '"]'),
      ),
      q = c.querySelectorAll('meta[property="article:section"]'),
      r = c.querySelectorAll(
        'meta[content="'.concat(ArticleSEO.openGraph.article.tags[0], '"]'),
      ),
      s = a.filter(function(a) {
        return 'article:tag:00' === a.key;
      }),
      t = c.querySelectorAll(
        'meta[content="'.concat(ArticleSEO.openGraph.article.tags[1], '"]'),
      ),
      u = a.filter(function(a) {
        return 'article:tag:01' === a.key;
      });
    expect((0, _from['default'])(d).length).toBe(1),
      expect((0, _from['default'])(e).length).toBe(1),
      expect((0, _from['default'])(f).length).toBe(1),
      expect((0, _from['default'])(g).length).toBe(1),
      expect((0, _from['default'])(h).length).toBe(1),
      expect((0, _from['default'])(i).length).toBe(1),
      expect((0, _from['default'])(j).length).toBe(1),
      expect((0, _from['default'])(k).length).toBe(1),
      expect((0, _from['default'])(l).length).toBe(1),
      expect((0, _from['default'])(m).length).toBe(1),
      expect((0, _from['default'])(n).length).toBe(1),
      expect((0, _from['default'])(o).length).toBe(1),
      expect((0, _from['default'])(p).length).toBe(1),
      expect((0, _from['default'])(q).length).toBe(1),
      expect((0, _from['default'])(r).length).toBe(1),
      expect((0, _from['default'])(s).length).toBe(1),
      expect((0, _from['default'])(t).length).toBe(1),
      expect((0, _from['default'])(u).length).toBe(1);
  });
var BookSEO = {
  title: 'Book Page Title',
  description: 'Description of book page',
  openGraph: {
    title: 'Open Graph Book Title',
    description: 'Description of open graph book',
    url: 'https://www.example.com/books/book-title',
    type: 'book',
    book: {
      releaseDate: '2018-09-17T11:08:13Z',
      isbn: '978-3-16-148410-0',
      authors: [
        'https://www.example.com/authors/@firstnameA-lastnameA',
        'https://www.example.com/authors/@firstnameB-lastnameB',
      ],
      tags: ['Tag A', 'Tag B'],
    },
    images: [
      {
        url: 'https://www.test.ie/og-image-book-title-01.jpg',
        width: 850,
        height: 650,
        alt: 'Og Image Alt Book Title A',
      },
      {
        url: 'https://www.test.ie/og-image-book-title-02.jpg',
        width: 950,
        height: 850,
        alt: 'Og Image Alt Book Title B',
      },
    ],
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
it('Book SEO renders correctly', function() {
  var a = (0, _buildTags['default'])(BookSEO),
    b = (0, _reactTestingLibrary.render)(
      _react['default'].createElement(
        _react['default'].Fragment,
        null,
        _react['default'].Children.toArray(a),
      ),
    ),
    c = b.container;
  expect(c).toMatchSnapshot();
}),
  it('Check book og type meta', function() {
    var a = (0, _buildTags['default'])(BookSEO),
      b = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(a),
        ),
      ),
      c = b.container,
      d = c.querySelectorAll(
        'meta[content="'.concat(BookSEO.openGraph.type, '"]'),
      ),
      e = c.querySelectorAll('meta[property="og:type"]'),
      f = c.querySelectorAll(
        'meta[content="'.concat(BookSEO.openGraph.book.releaseDate, '"]'),
      ),
      g = c.querySelectorAll('meta[property="book:release_date"]'),
      h = c.querySelectorAll(
        'meta[content="'.concat(BookSEO.openGraph.book.authors[0], '"]'),
      ),
      i = a.filter(function(a) {
        return 'book:author:00' === a.key;
      }),
      j = c.querySelectorAll(
        'meta[content="'.concat(BookSEO.openGraph.book.authors[1], '"]'),
      ),
      k = a.filter(function(a) {
        return 'book:author:01' === a.key;
      }),
      l = c.querySelectorAll(
        'meta[content="'.concat(BookSEO.openGraph.book.isbn, '"]'),
      ),
      m = c.querySelectorAll('meta[property="book:isbn"]'),
      n = c.querySelectorAll(
        'meta[content="'.concat(BookSEO.openGraph.book.tags[0], '"]'),
      ),
      o = a.filter(function(a) {
        return 'book:tag:00' === a.key;
      }),
      p = c.querySelectorAll(
        'meta[content="'.concat(BookSEO.openGraph.book.tags[1], '"]'),
      ),
      q = a.filter(function(a) {
        return 'book:tag:01' === a.key;
      });
    expect((0, _from['default'])(d).length).toBe(1),
      expect((0, _from['default'])(e).length).toBe(1),
      expect((0, _from['default'])(f).length).toBe(1),
      expect((0, _from['default'])(g).length).toBe(1),
      expect((0, _from['default'])(h).length).toBe(1),
      expect((0, _from['default'])(i).length).toBe(1),
      expect((0, _from['default'])(j).length).toBe(1),
      expect((0, _from['default'])(k).length).toBe(1),
      expect((0, _from['default'])(l).length).toBe(1),
      expect((0, _from['default'])(m).length).toBe(1),
      expect((0, _from['default'])(n).length).toBe(1),
      expect((0, _from['default'])(o).length).toBe(1),
      expect((0, _from['default'])(p).length).toBe(1),
      expect((0, _from['default'])(q).length).toBe(1);
  });
var ProfileSEO = {
  title: 'Profile Page Title',
  description: 'Description of profile page',
  openGraph: {
    title: 'Open Graph Profile Title',
    description: 'Description of open graph profile',
    url: 'https://www.example.com/@firstlast123',
    type: 'profile',
    profile: {
      firstName: 'First',
      lastName: 'Last',
      username: 'firstlast123',
      gender: 'male',
    },
    images: [
      {
        url: 'https://www.test.ie/og-image-firstlast123-01.jpg',
        width: 850,
        height: 650,
        alt: 'Og Image Alt firstlast123 A',
      },
      {
        url: 'https://www.test.ie/og-image-firstlast123-02.jpg',
        width: 950,
        height: 850,
        alt: 'Og Image Alt firstlast123 B',
      },
    ],
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
it('Profile SEO renders correctly', function() {
  var a = (0, _buildTags['default'])(ProfileSEO),
    b = (0, _reactTestingLibrary.render)(
      _react['default'].createElement(
        _react['default'].Fragment,
        null,
        _react['default'].Children.toArray(a),
      ),
    ),
    c = b.container;
  expect(c).toMatchSnapshot();
}),
  it('Check profile og type meta', function() {
    var a = (0, _buildTags['default'])(ProfileSEO),
      b = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(a),
        ),
      ),
      c = b.container,
      d = c.querySelectorAll(
        'meta[content="'.concat(ProfileSEO.openGraph.type, '"]'),
      ),
      e = c.querySelectorAll('meta[property="og:type"]'),
      f = c.querySelectorAll(
        'meta[content="'.concat(ProfileSEO.openGraph.profile.firstName, '"]'),
      ),
      g = c.querySelectorAll('meta[property="profile:first_name"]'),
      h = c.querySelectorAll(
        'meta[content="'.concat(ProfileSEO.openGraph.profile.lastName, '"]'),
      ),
      i = c.querySelectorAll('meta[property="profile:last_name"]'),
      j = c.querySelectorAll(
        'meta[content="'.concat(ProfileSEO.openGraph.profile.username, '"]'),
      ),
      k = c.querySelectorAll('meta[property="profile:username"]'),
      l = c.querySelectorAll(
        'meta[content="'.concat(ProfileSEO.openGraph.profile.gender, '"]'),
      ),
      m = c.querySelectorAll('meta[property="profile:gender"]');
    expect((0, _from['default'])(d).length).toBe(1),
      expect((0, _from['default'])(e).length).toBe(1),
      expect((0, _from['default'])(f).length).toBe(1),
      expect((0, _from['default'])(g).length).toBe(1),
      expect((0, _from['default'])(h).length).toBe(1),
      expect((0, _from['default'])(i).length).toBe(1),
      expect((0, _from['default'])(j).length).toBe(1),
      expect((0, _from['default'])(k).length).toBe(1),
      expect((0, _from['default'])(l).length).toBe(1),
      expect((0, _from['default'])(m).length).toBe(1);
  });
var VideoSEO = {
  title: 'Video Page Title',
  description: 'Description of video page',
  openGraph: {
    title: 'Open Graph Video Title',
    description: 'Description of open graph video',
    url: 'https://www.example.com/videos/video-title',
    type: 'video.movie',
    video: {
      actors: [
        {
          profile: 'https://www.example.com/actors/@firstnameA-lastnameA',
          role: 'Protagonist',
        },
        {
          profile: 'https://www.example.com/actors/@firstnameB-lastnameB',
          role: 'Antagonist',
        },
      ],
      directors: [
        'https://www.example.com/directors/@firstnameA-lastnameA',
        'https://www.example.com/directors/@firstnameB-lastnameB',
      ],
      writers: [
        'https://www.example.com/writers/@firstnameA-lastnameA',
        'https://www.example.com/writers/@firstnameB-lastnameB',
      ],
      duration: 68e4,
      releaseDate: '2022-12-21T22:04:11Z',
      tags: ['Tag A', 'Tag B'],
    },
    images: [
      {
        url: 'https://www.test.ie/og-image-video-title-01.jpg',
        width: 850,
        height: 650,
        alt: 'Og Image Alt Video Title A',
      },
      {
        url: 'https://www.test.ie/og-image-video-title-02.jpg',
        width: 950,
        height: 850,
        alt: 'Og Image Alt Video Title B',
      },
    ],
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
it('Video SEO renders correctly', function() {
  var a = (0, _buildTags['default'])(VideoSEO),
    b = (0, _reactTestingLibrary.render)(
      _react['default'].createElement(
        _react['default'].Fragment,
        null,
        _react['default'].Children.toArray(a),
      ),
    ),
    c = b.container;
  expect(c).toMatchSnapshot();
}),
  it('Check video og type meta', function() {
    var a = (0, _buildTags['default'])(VideoSEO),
      b = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(a),
        ),
      ),
      c = b.container,
      d = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.type, '"]'),
      ),
      e = c.querySelectorAll('meta[property="og:type"]'),
      f = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.video.releaseDate, '"]'),
      ),
      g = c.querySelectorAll('meta[property="video:release_date"]'),
      h = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.video.duration, '"]'),
      ),
      i = c.querySelectorAll('meta[property="video:duration"]'),
      j = c.querySelectorAll(
        'meta[content="'.concat(
          VideoSEO.openGraph.video.actors[0].profile,
          '"]',
        ),
      ),
      k = a.filter(function(a) {
        return 'video:actor:00' === a.key;
      }),
      l = c.querySelectorAll(
        'meta[content="'.concat(
          VideoSEO.openGraph.video.actors[1].profile,
          '"]',
        ),
      ),
      m = a.filter(function(a) {
        return 'video:actor:01' === a.key;
      }),
      n = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.video.actors[0].role, '"]'),
      ),
      o = a.filter(function(a) {
        return 'video:actor:role:00' === a.key;
      }),
      p = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.video.actors[1].role, '"]'),
      ),
      q = a.filter(function(a) {
        return 'video:actor:role:01' === a.key;
      }),
      r = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.video.directors[0], '"]'),
      ),
      s = a.filter(function(a) {
        return 'video:director:00' === a.key;
      }),
      t = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.video.directors[1], '"]'),
      ),
      u = a.filter(function(a) {
        return 'video:director:01' === a.key;
      }),
      v = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.video.writers[0], '"]'),
      ),
      w = a.filter(function(a) {
        return 'video:writer:00' === a.key;
      }),
      x = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.video.writers[1], '"]'),
      ),
      y = a.filter(function(a) {
        return 'video:writer:01' === a.key;
      }),
      z = c.querySelectorAll(
        'meta[content="'.concat(ArticleSEO.openGraph.article.tags[0], '"]'),
      ),
      A = a.filter(function(a) {
        return 'video:tag:00' === a.key;
      }),
      B = c.querySelectorAll(
        'meta[content="'.concat(VideoSEO.openGraph.video.tags[1], '"]'),
      ),
      C = a.filter(function(a) {
        return 'video:tag:01' === a.key;
      });
    expect((0, _from['default'])(d).length).toBe(1),
      expect((0, _from['default'])(e).length).toBe(1),
      expect((0, _from['default'])(f).length).toBe(1),
      expect((0, _from['default'])(g).length).toBe(1),
      expect((0, _from['default'])(h).length).toBe(1),
      expect((0, _from['default'])(i).length).toBe(1),
      expect((0, _from['default'])(j).length).toBe(1),
      expect((0, _from['default'])(k).length).toBe(1),
      expect((0, _from['default'])(l).length).toBe(1),
      expect((0, _from['default'])(m).length).toBe(1),
      expect((0, _from['default'])(n).length).toBe(1),
      expect((0, _from['default'])(o).length).toBe(1),
      expect((0, _from['default'])(p).length).toBe(1),
      expect((0, _from['default'])(q).length).toBe(1),
      expect((0, _from['default'])(r).length).toBe(1),
      expect((0, _from['default'])(s).length).toBe(1),
      expect((0, _from['default'])(t).length).toBe(1),
      expect((0, _from['default'])(u).length).toBe(1),
      expect((0, _from['default'])(v).length).toBe(1),
      expect((0, _from['default'])(w).length).toBe(1),
      expect((0, _from['default'])(x).length).toBe(1),
      expect((0, _from['default'])(y).length).toBe(1),
      expect((0, _from['default'])(z).length).toBe(1),
      expect((0, _from['default'])(A).length).toBe(1),
      expect((0, _from['default'])(B).length).toBe(1),
      expect((0, _from['default'])(C).length).toBe(1);
  }),
  it('additional meta tags are set', function() {
    var a = (0, _objectSpread2['default'])({}, SEO, {
        additionalMetaTags: [
          { property: 'random', content: 'something' },
          { name: 'foo', content: 'bar' },
        ],
      }),
      b = (0, _buildTags['default'])(a),
      c = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(b),
        ),
      ),
      d = c.container,
      e = d.querySelectorAll('meta[content="something"]'),
      f = d.querySelectorAll('meta[content="bar"]');
    expect((0, _from['default'])(e).length).toBe(1),
      expect((0, _from['default'])(f).length).toBe(1);
  }),
  it('correctly sets noindex default', function() {
    var a = (0, _objectSpread2['default'])({}, SEO, {
        dangerouslySetAllPagesToNoIndex: !0,
      }),
      b = (0, _buildTags['default'])(a),
      c = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(b),
        ),
      ),
      d = c.container,
      e = d.querySelectorAll('meta[content="index,follow"]'),
      f = d.querySelectorAll('meta[content="noindex,nofollow"]');
    expect((0, _from['default'])(e).length).toBe(0),
      expect((0, _from['default'])(f).length).toBe(2);
  }),
  it('correctly read noindex false', function() {
    var a = (0, _objectSpread2['default'])({}, SEO, { noindex: !1 }),
      b = (0, _buildTags['default'])(a),
      c = (0, _reactTestingLibrary.render)(
        _react['default'].createElement(
          _react['default'].Fragment,
          null,
          _react['default'].Children.toArray(b),
        ),
      ),
      d = c.container,
      e = d.querySelectorAll('meta[content="index,follow"]'),
      f = d.querySelectorAll('meta[content="noindex,nofollow"]');
    expect((0, _from['default'])(e).length).toBe(2),
      expect((0, _from['default'])(f).length).toBe(0);
  });
