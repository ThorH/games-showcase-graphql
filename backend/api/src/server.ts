import express from 'express'
import mongoose from 'mongoose'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

mongoose.connect('mongodb+srv://thorhaubert:NlirT4qJiazHggYG@cluster0.bvlx0am.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('MongoDB connection succeeded')
    })
    .catch((error) => {
        console.log('MongoDB error connection: ', error.message)
    })

app.listen(3333, () => console.log("Listening on port 3333"))