const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Convert body to json readable
app.use(express.json());

//Require in mongoose_connection.js to connect to the database
require("./mongoose_connection.js");

//Routing
const createUserRouter = require('./routes/authentication/create_user');
app.use('/create', createUserRouter);

//Listen on specified port
app.listen(port, () => {
    console.log('Listening on port ' + port);
})

