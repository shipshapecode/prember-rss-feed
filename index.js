'use strict';

const RSS = require('rss');

module.exports = {
  name: 'prember-rss-feed',

  // TODO replace this with a real treeForPublic. This was just copied for reference from prember-sitemap-generator
  treeForPublic() {
    this._super.treeForPublic && this._super.treeForPublic.apply(this, arguments);

    if (process.env.EMBER_ENV === 'production') {
      const premberOptions = this.app.options['prember'];
      const baseRoot = premberOptions.baseRoot;
      if (!baseRoot) {
        return this.ui.writeLine(chalk.red(
          'ERROR: You must define `baseRoot` for prember-sitemap-generator to generate sitemaps.'
        ));
      }
      const urls = premberOptions && premberOptions.urls ? premberOptions.urls : [];
      const tree = writeFile('/prember-sitemap-generator/sitemap.xml', generateSitemap(baseRoot, urls));

      this.ui.writeLine(chalk.green('sitemap.xml successfully created!'));

      return new Funnel(tree, {
        srcDir: 'prember-sitemap-generator'
      });
    }
  }
};
