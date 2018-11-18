'use strict';

let RSS = require('rss');
let fm = require('front-matter');
let { format } = require('date-fns');
let marked = require('marked');
let { readFileSync } = require('fs');
let { sync: globSync } = require('glob');

module.exports = function rssFeedGenerator(rssFeedOptions) {
  let rfc822DateFormat = 'ddd, DD MMM YYYY HH:mm:ss ZZ';
  let pubDate = format(new Date(), rfc822DateFormat);

  let rssFeed = new RSS(
    Object.assign(
      {
        language: 'en',
        pubDate,
        feed_url: `${rssFeedOptions.feed.site_url}/feed.xml`
      },
      rssFeedOptions.feed
    )
  );

  let articles = globSync(rssFeedOptions.articles);

  if (articles.length === 0) {
    throw new Error(`There are no articles in your blog. ${rssFeedOptions.articles} is probably wrong`);
  }

  articles.forEach(article => {
    let { attributes, body } = fm(readFileSync(article, 'utf-8'));
    let { title, categories, author, date } = attributes;

    let post = {
      title,
      description: marked(body),
      categories,
      author,
      date: format(date, rfc822DateFormat),
      url: rssFeedOptions.urlForPost(attributes)
    };

    rssFeed.item(post);
  });

  return rssFeed.xml({ indent: true });
};
