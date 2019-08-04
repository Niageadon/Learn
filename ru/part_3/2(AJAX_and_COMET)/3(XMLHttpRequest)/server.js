var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('./ru/part_3/2(AJAX_and_COMET)/3(XMLHttpRequest)/server.js', {
  cache: 0
});

var json = JSON.stringify();




// ------ запустить сервер -------

if (!module.parent) {
  http.createServer((req, res) =>{
    res.end('boba')
  }).listen(8080);
} else {
  exports.accept = accept;
}
