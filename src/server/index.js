var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require('cors')

dotenv.config();
const app = express()
app.use(express.static('dist'))
app.use(cors())

console.log(__dirname)

// designates what port the app will listen to for incoming requests
app.listen(8083, function () {
    console.log('Example app listening on port 8083!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// taken from meaningcloud website
var https = require('follow-redirects').https;
//var fs = require('fs');


app.post('/api', function (req, res) {
    let key = process.env.API_KEY
    let url = req.body.userUrl

    var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': `/sentiment-2.1?key=${key}&lang=en&url=${url}`,
    'headers': {
    },
    'maxRedirects': 20
    };

    var req = https.request(options, function (res2) {
        var chunks = [];

        res2.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res2.on("end", function (chunk) {
            var body = Buffer.concat(chunks);
            res.send(body);
        });

        res2.on("error", function (error) {
            console.error(error);
        });
    });

    req.end();
})

