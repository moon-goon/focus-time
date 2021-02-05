const express = require('express');
const path = require('path'); 
const webpack = require('webpack');
const request = require('request');
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV ? 'dev' : 'config'
const config = require('../webpack.'+env+'.js');
const compiler = webpack(config);
const app = express();


app.use(
    require('webpack-dev-middleware')(compiler, {})
);

app.use(require('webpack-hot-middleware')(compiler));

const DIST_DIR = path.join(__dirname, '../dist'); 
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));
app.get('/', (req, res) => {
 res.sendFile(HTML_FILE); 
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});


