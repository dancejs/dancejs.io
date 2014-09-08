var restify = require('restify'),
  serverOpts = {},
  fs = require('fs');

if (process.env.KEY) {
  serverOpts.key = fs.readFileSync(process.env.KEY);
  serverOpts.certificate = fs.readFileSync(process.env.CERTIFICATE);
}

var server = restify.createServer(serverOpts);
server.use(restify.queryParser());

// serve static JavaScript and CSS.
server.get(/\/js|css|images\/?.*/, restify.serveStatic({
  directory: './assets'
}));

// serve the static index page.
server.get(/\/?/, restify.serveStatic({
  directory: './assets',
  default: 'index.html'
}));

// bind server to on port 5000, or the port provided.
server.listen(process.env.PORT || 5000, function () {
  console.log('%s listening at %s', server.name, server.url);
});
