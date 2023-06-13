process.title = 'ppagilWebServer';
var args = process.argv,
    port = args[2] || 3000,
    webServer = require('./server');

webServer.listen(port, function () {
    console.log('Server started at port ' + port);
});