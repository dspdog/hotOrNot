/**
 * Created by pmikolajczyk on 3/26/15.
 */
var express = require('express')
var app = express()
var util = require('util');

var request = require('request')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.get('/get_hubs', function (req, res) {
    res.send("hubs?");
})

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get(/^(.+)$/, function(req, res) { //file server for the rest of the files in /public
                                       //see comments at http://stackoverflow.com/questions/9443840/basic-webserver-with-node-js-and-express-for-serving-html-file-and-assets
    res.sendFile(__dirname +  '/public/' + req.params[0]);
});





var server = app.listen(3002, '0.0.0.0',  function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('server listening at http://%s:%s', host, port)

})