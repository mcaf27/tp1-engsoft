require('dotenv').config()

const express = require('express');
require('express-async-errors');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

app.use( async (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(process.env.PORT || 3333, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});