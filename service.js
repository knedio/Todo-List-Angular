//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/todo-list'
app.use(express.static(__dirname + '/dist/todo-list'));

app.get('*', function(req,res) {
  // Replace the '/dist/todo-list/index.html'
  res.sendFile(path.join(__dirname + '/dist/todo-list/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);