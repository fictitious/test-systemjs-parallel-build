
Failing testcase for systemjs-builder

        npm install
        
 then run build-both.js which tries to build m1 and m2 using two builders in the simplest imaginable way:
 
        node build-both.js
 
 build-both.js contains
 
 ```javascript
var Builder = require('systemjs-builder');

var builder1 = new Builder;
builder1.loadConfig('m1-config.js');
builder1.bundle('m1.js', 'm1.min.js', {minify: true});

var builder2 = new Builder;
builder2.loadConfig('m2-config.js');
builder2.bundle('m2.js', 'm2.min.js', {minify: true});

```
it fails:
         
    throw new Error('Unhandled promise rejection.\n' + reason && reason.stack ||
            
    Error: Error on fetch for m2 at file:///......./test-systemjs-parallel-build/m2
  	Loading m1.js
	  Error: ENOENT, open '/....../j/test-systemjs-parallel-build/m2'
    at Error (native)
	
    at /............../test-systemjs-parallel-build/node_modules/systemjs-builder/lib/builder.js:27:9
    at Object.lib$rsvp$events$$default.trigger (/............../test-systemjs-parallel-build/node_modules/systemjs-builder/node_modules/rsvp/dist/rsvp.js:245:13)
    at null._onTimeout (/............../test-systemjs-parallel-build/node_modules/systemjs-builder/node_modules/rsvp/dist/rsvp.js:779:47)
    at Timer.listOnTimeout (timers.js:110:15)
    

Building them one at a time works:           
         
        node build-m1.js   // ok
        
        node build-m2.js   // ok 
        
Waiting for each step to complete before starting the next step also works:
 
        node build-serialized.js  // ok
        
        
Also, both m1.html and m2.html work in the browser
    
