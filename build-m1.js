var Builder = require('systemjs-builder');

var builder1 = new Builder;
builder1.loadConfig('m1-config.js');
builder1.bundle('m1.js', 'm1.min.js', {minify: true});
