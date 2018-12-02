//Code that will be implemented to run a mini server from the bot. These are the necessary packages. 
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

//Scraping function that takes in a request and response
app.get('/scrape', function(req, res){

    var url = 'https://www.webscraper.io/test-sites/e-commerce/allinone';
  //All the web scraping magic will happen here
})

//Port code to listen 
app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;