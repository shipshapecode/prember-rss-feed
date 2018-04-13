/* eslint-env node */

let chalk = require('chalk');
let { green }  = chalk;
let output = `
Generated a feed config. Configure it and then use it in your ember-cli-build.js as shown below,

let app = new EmberAddon(defaults, {
  rssFeed: require('./config/rss-feed')
});
`

module.exports = {
  description: 'Generates rss feed config',

  normalizeEntityName() {},

  afterInstall() {
    this.ui.write(green(output));
  }
};
