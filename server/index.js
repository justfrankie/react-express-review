const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./router.js');
const app = express();
const port = 3000;

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

// setting up express connection
app.use('/api', router)
app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))