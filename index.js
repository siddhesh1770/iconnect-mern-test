const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config(  // config var support for development
    {
        path: './config/config.env'
    }
);
const connectDB = require('./config/db');
connectDB();
const express = require('express');
const app = express();



// json support
app.use(bodyParser.json());
// using cors for cross origin
app.use(cors({origin: true}));

// import and se api routes
app.use('/api', require('./routes/api'));


const port = process.env.PORT || 1770;
// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// on unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // close server & exit process
    server.close(() => process.exit(1));
});



// Author :- Siddhesh Patil (siddhesh1770)
// hello@siddheshpatil.in