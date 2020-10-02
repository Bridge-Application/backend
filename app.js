//RUN APP.JS TO START SERVER
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Convert body to json readable
app.use(express.json());

//Require in mongoose_connection.js to connect to the database
require("./mongoose_connection.js");

//Routing
const signupRouter = require('./routes/account/signup.js');
const institutionDashboardRouter = require('./routes/institution/institution_dashboard')
app.use('/accounts', signupRouter);
app.use('/institutionDashboard', institutionDashboardRouter);

//Listen on specified port
app.listen(port, () => {
    console.log('Sucessfully started on port ' + port);
})

