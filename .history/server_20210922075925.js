const express = require('express')
const app = express()
const connectDB = require('./config/db')
const cors = require('cors')
connectDB();

app.use(express.json({extended:false}))

app.use(
    cors({
        origin:'*'
    })
)

const PORT =process.env.PORT || 5000

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))



app.use('/api/users',require('./routes/users'))
app.use('/api/auth',require('./routes/auth'))
app.use('/api/contacts',require('./routes/contacts'))