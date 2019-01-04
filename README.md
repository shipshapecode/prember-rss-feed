prember-rss-feed
==============================================================================

<a href="https://shipshape.io/"><img src="http://i.imgur.com/DWHQjA5.png" width="100" height="100"/></a>

**[prember-rss-feed is built and maintained by Ship Shape. Contact us for Ember.js consulting, development, and training for your project](https://shipshape.io/ember-consulting)**.

[![npm version](https://badge.fury.io/js/prember-rss-feed.svg)](http://badge.fury.io/js/prember-rss-feed)
![Download count all time](https://img.shields.io/npm/dt/prember-rss-feed.svg)
[![npm](https://img.shields.io/npm/dm/prember-rss-feed.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/prember-rss-feed.svg)](http://emberobserver.com/addons/prember-rss-feed)
[![Build Status](https://travis-ci.org/shipshapecode/prember-rss-feed.svg)](https://travis-ci.org/shipshapecode/prember-rss-feed) 
[![Greenkeeper badge](https://badges.greenkeeper.io/shipshapecode/prember-rss-feed.svg)](https://greenkeeper.io/)

Generate [RSS Feeds](https://validator.w3.org/feed/docs/rss2.html) for your prember prerendered
fastboot blog.

Installation
------------------------------------------------------------------------------

```
ember install prember-rss-feed
```

Usage
------------------------------------------------------------------------------

Once you have installed the addon, you'll have a file `config/rss-feed.js` created that you
can configure and use in your `ember-cli-build.js` as,

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
