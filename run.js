const express = require('express');
const app = express();
const port = 3000; // You can change the port number if needed
const path = require('path');


// set the public folder as static folder
app.use('/_static', express.static(path.join(__dirname, 'src/_static')));

// set the views directory
app.set('views', path.join(__dirname, 'src/views'));

// set the view engine
app.set('view engine', 'ejs');

// landing page router
app.get('/', (req, res) => {
    res.render('landing_page', { title: 'My Portfolio'});
});

// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});