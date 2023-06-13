var http = require('http'),
    config = require('./config'),
    fileHandler = require('./filehandler'),
    parse = require('url').parse,
    types = config.types,
    rootFolder = config.rootFolder,
    defaultIndex = config.defaultIndex,
    server;

module.exports = server = http.createServer();

server.on('request', onRequest);

function onRequest(req, res) {
    var filename = req.url,
        fullPath,
        extension;

    if (filename === '/') {
        filename = defaultIndex;
    }

    if (filename.split('.').length < 2) {
        filename = filename + '.html'
        extension = 'html'
    } else {
        extension = filename.split('.')[1]
    }

    fullPath = rootFolder + filename;
    fileHandler(fullPath, function (data) {
        res.writeHead(200, {
            'Content-Type': types[extension] || 'text/plain',
            'Content-Length': data.length
        });
        res.end(data);

    }, function (err) {
        res.writeHead(404);
        res.end();
    });
}