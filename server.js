const express = require('express');
const cors = require('cors');
const path = require('path');
const appRoute = require('./routes/app');
const app = express();
app.use(cors());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

//PORT
const PORT = process.env.PORT || 5000;



//app Route
app.use('/app', appRoute);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(PORT, ()=>{
	console.log("Server running on " + PORT);
});
