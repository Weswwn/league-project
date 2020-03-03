const express = require('express')
const bodyParser = require('body-parser'); 
const morgan = require('morgan');
const port = 3000
const app = express()


// app.get('/', (req, res) => res.send('Hello World!'))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static('public'))

app.get('/api/getAccount', (req, res) => {
  
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))