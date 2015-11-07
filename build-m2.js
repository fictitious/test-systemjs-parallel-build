var Builder = require('systemjs-builder');

var builder2 = new Builder;
builder2.loadConfig('m2-config.js');
builder2.bundle('m2.js', 'm2.min.js', {minify: true});

