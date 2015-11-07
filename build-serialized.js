var Builder = require('systemjs-builder');

var builder1 = new Builder;
builder1.loadConfig('m1-config.js').then(function() {
    builder1.bundle('m1.js', 'm1.min.js', {minify: true}).then(function() {
        
        var builder2 = new Builder;
        builder2.loadConfig('m2-config.js').then(function() {
            builder2.bundle('m2.js', 'm2.min.js', {minify: true}).then(function() {
            });
        });
        
    });
});


