prember-rss-feed [![Build Status](https://travis-ci.org/shipshapecode/prember-rss-feed.svg?branch=master)](https://travis-ci.org/shipshapecode/prember-rss-feed)
==============================================================================

Generate [RSS Feeds](https://validator.w3.org/feed/docs/rss2.html) for your prember prerendered
fastboot blog.

Installation
------------------------------------------------------------------------------

```
ember install prember-rss-feed
```

Usage
------------------------------------------------------------------------------

Once installing the addon, you'll have a file `config/rss-feed.js` created that you
can configure & use in your `ember-cli-build.js` as,

```javascript
let app = new EmberAddon(defaults, {
  rssFeed: require('./config/rss-feed')
});
```

Blog post meta data
------------------------------------------------------------------------------

This tool assumes you use markdown files for your content. In each blog post ensure you have the following meta data

```markdown
---
title: Hello world
description: howdy world
categories:
  - obligatory post
  - greet
author: Zoey
date: "2013-01-08 09:30"
---
Hello world!

```

This addon has a sample configuration in `config/rss-feed.js` and few blog posts for reference in `./tests/dummy/app/blog/`.

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
