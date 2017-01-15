var soap = require('soap');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var $ = require('jquery');
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));



app.get('/balance',function(req, res) {
  var url = 'https://servisler.izmir.bel.tr/Service1.svc?wsdl';
  var args = {kartNumarasi: '23107154676'};
  soap.createClient(url, function(err, client) {
    if (typeof client !== 'undefined') {
       client.UlasimKartiBakiyesiGetir(args, function(err, result) {
          res.send(result.UlasimKartiBakiyesiGetirResult);
       });
    }
  });
});


http.listen(PORT, function () {
  console.log('Server Started on ' +PORT);
});
