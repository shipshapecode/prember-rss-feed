'use strict';

let siteURL = 'http://example.com';

module.exports = {

  feed: {
    title: 'My awesome blog',

    description: 'Short description about your blog within 320 words',

    site_url: siteURL,

    // Icon of your site
    image_url: `${siteURL}/icon.png`,

    managingEditor: 'barry.allen@justice-league.com (Barry Allen)',

    // Life achievement unlocked!
    webMaster: 'bruce.wayne@justice-league.com (Bruce Wayne)',

    copyright: '2018 Bruce Wayne',

    // language: 'de'
  },

  //Glob style patterns (https://github.com/isaacs/node-glob#glob-primer)
  articles: './tests/dummy/app/blog/*.md',

  /** Actual URL of individual blog post */
  urlForPost(postMeta) {
    return `${siteURL}/blog/${postMeta.slug}/`;
  }

};
