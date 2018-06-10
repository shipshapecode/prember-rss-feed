'use strict';

let rssFeedGenerator = require('./lib/rss-generator');
let broccoliFileCreator = require('broccoli-file-creator');
let Funnel = require('broccoli-funnel');
let chalk = require('chalk');

module.exports = {
  name: 'prember-rss-feed',

  treeForPublic() {
    this._super.treeForPublic && this._super.treeForPublic.apply(this, arguments);

    if (process.env.EMBER_ENV === 'production') {
      let rssFeedOptions = this.app.options['rssFeed'];

      try {
        let feedContent = rssFeedGenerator(rssFeedOptions);

        let tree = broccoliFileCreator('/prember-rss-feed/feed.xml', feedContent);

        this.ui.writeLine(chalk.green('RSS Feed created successfully'));

        return new Funnel(tree, { srcDir: 'prember-rss-feed' });

      } catch (e) {
        this.ui.writeLine(chalk.red('RSS Feed generation failed'));
        this.ui.writeLine(e);
      }
    }
  }
};
