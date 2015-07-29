var fs = require('fs');
var api = JSON.parse(fs.readFileSync((process.env.HOME || process.env.USERPROFILE) + '/.api/plotly.apikey', 'utf8'));
var plotly = require('plotly')(api.name, api.key);
var username = api.name;
var api_key = api.key;
