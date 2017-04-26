const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use('/static', express.static(path.join(__dirname, 'build/static')));
app.use('/data', express.static(path.join(__dirname, 'build/data')));
app.use('/images', express.static(path.join(__dirname, 'build/images')));
app.use('/icons', express.static(path.join(__dirname, 'build/icons')));

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/build/index.html');
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});