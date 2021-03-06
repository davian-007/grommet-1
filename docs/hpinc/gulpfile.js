var gulp = require('gulp');
var path = require('path');
var devGulpTasks = require('../../src/utils/gulp/gulp-tasks');

var opts = {
  base: '../../',
  dist: path.resolve(__dirname, '../../docs/dist/hpinc'),
  copyAssets: [
    'docs/src/index.html',
    {
      asset: 'docs/src/design/img/**',
      dist: 'docs/dist/hpinc/img/'
    },
    {
      asset: 'src/img/**',
      dist: 'docs/dist/hpinc/img/'
    },
    {
      asset: 'docs/src/img/**',
      dist: 'docs/dist/hpinc/img/'
    },
    {
      asset: 'docs/src/develop/img/**',
      dist: 'docs/dist/hpinc/img/'
    }
  ],
  scssAssets: ['src/scss/grommet-core/**/*.scss', 'docs/src/scss/**/*.scss', 'src/scss/hpinc/**/*.scss'],
  jsAssets: ['docs/src/**/*.js'],
  mainJs: 'docs/src/index.js',
  mainScss: 'docs/src/scss/index-hpinc.scss',
  icons: {
    source: path.resolve(__dirname, '../../src/img/icons'),
    destination: path.resolve(__dirname, '../../src/js/components/icons/base')
  },
  webpack: {
    resolve: {
      alias: {
        'grommet/scss': path.resolve(__dirname, '../../src/scss'),
        'grommet': path.resolve(__dirname, '../../src/js')
      },
      root: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, '../../node_modules'),
        path.resolve(__dirname, '../../src/lib'),
        path.resolve(__dirname, '../../src/scss'),
        path.resolve(__dirname, '../src/scss')
      ]
    },
    module: {
      loaders: [
        {
          test: /develop(\/|\\).*\.htm$|design(\/|\\)[^\/]*\.htm$|design(\/|\\).*\/.*\.htm$/,
          loader: 'babel!imports?React=react,Router=react-router,Link=>Router.Link!html-jsx-loader',
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
  },
  devServerPort: 8004,
  devServerProxy: {
    "/rest/*": 'http://localhost:8000'
  },
  env: {
    __THEME__: '"hpinc"'
  },
  scsslint: true
};

devGulpTasks(gulp, opts);
