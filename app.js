const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
/* plugin to read external sources */
const Records = require('spike-records')
const wp = {}

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: (ctx) => { 
      return { 
        pageId: pageId(ctx), 
        foo: 'bar', 
        wp: wp 
      }
    }
  }),
  postcss: cssStandards(),
  babel: jsStandards(),
  plugins: [new Records({
    addDataTo: wp,
    posts: { file: 'assets/data/posts.json' }
  })]
}
