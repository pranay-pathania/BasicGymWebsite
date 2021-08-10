const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()

const port = 6969

//MONGOOSE STUFF
mongoose.connect('mongodb://localhost:27017/ProjectGymDatabase', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
    console.log('We are connected')
})

const customerSchema = new mongoose.Schema({   //defining new schema based on post request
    name: String, 
    age: Number,
    gender: String,
    phone: Number,
    address: String,
    more: String
})

const CustomerData = mongoose.model('Customer', customerSchema)   //creating a model


//EXPRESS STUFF
app.use('/static', express.static('static')) //serving static files
app.use(express.urlencoded())  //getting data from site to express



//PUG SPECIFIC STUFF
app.set('view engine', 'pug')  //setting template engine as pug
app.set('views', path.join(__dirname, 'views'))  //setting the views directory


//ENDPOINTS

/* GET REQUESTS */

//Home Page GET Request
app.get('/', (req, res) => {
    const params = { title: 'Home | XYZ Fitness', content: 'Join now and avail 12-month membership for just $99.99' }
    res.status(200).render('home', params)
})


//About Page GET Request
app.get('/about', (req, res) => {
    res.status(200).render('about')
})


//Contact Page GET Request
app.get('/contact', (req, res) => {
    res.status(200).render('contact')
})

//Supp. Page GET Request
app.get('/supplementation', (req, res) => {
    res.status(200).render('supplementation')
})


/* POST REQUESTS */

//Home Page POST Request
app.post('/', (req, res) => {
    const data = new CustomerData(req.body)
    console.log(data.name)

    data.save((err, data) => {
        if (err) return console.error(err);
        console.log(data)
    })

    //render after processing request 
    const params = { name: data.name }
    res.render('confirmedPage', params)
})




//START THE SERVER
app.listen(port, () => {
    console.log(`Running successfully on port ${port}`);
})
