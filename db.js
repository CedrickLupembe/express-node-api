const mongoose = require('mongoose')


// Connect to mongoDB
mongoose.connect(process.env.DB_CONNECT, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log("Connecting Mongodb");
})

.catch((e) => {
    console.log(" Not Connecting Mongodb");
})