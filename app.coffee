axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
handlebars = require 'handlebars'
layouts = require 'handlebars-layouts'
fs = require 'fs'

handlebars.registerHelper(layouts(handlebars));

handlebars.registerPartial('layout', fs.readFileSync 'views/layout.hbs', 'utf-8');
handlebars.registerPartial('header', fs.readFileSync 'views/_header.hbs', 'utf-8');


module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  extensions: [
    js_pipeline(files: 'assets/js/*.js'),
    css_pipeline(files: 'assets/css/*.styl')
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true

