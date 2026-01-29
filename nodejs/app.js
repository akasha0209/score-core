const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const bodyParser = require('body-parser');
const session = require('express-session');
app.use(bodyParser.json());

app.use(
    session({
        secret: process.env.JWT_SECRET || 'default_secret',
        resave: false,
        saveUninitialized: true
    })
)

// Sample route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})