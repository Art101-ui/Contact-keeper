const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
const cors = require('cors')


const app = express()
connectDB();

app.use(express.json({extended:false}))



app.use(
    cors({
        origin:'*'
    })
)




app.use('/api/users',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/contacts',require('./routes/contacts'))

// Define Routes
if (process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client','build','index.html')))
}