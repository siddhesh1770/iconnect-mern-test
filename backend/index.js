const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config(  // config var support for development
    {
        path: './config/config.env'
    }
);
const express = require('express');
const app = express();


// json support
app.use(express.json());
app.use(cors({origin: true}));

// import and use api routes
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