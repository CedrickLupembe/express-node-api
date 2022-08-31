const express = require('express')
require('dotenv/config')
require('./db')
const BodyParser = require('body-parser')


const app = express()

// Using middleware for body request format
app.use(BodyParser.json())


// Import routes
const PostsRoute = require('./routes/posts')


// Middleware
app.use('/post', PostsRoute)




// Listen port
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${process.env.PORT}!`)
})