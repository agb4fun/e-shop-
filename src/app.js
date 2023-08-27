const express = require('express')
const app = express()

const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

const api = process.env.API_URL



app.get(api + '/products', (req, res) => {

    res.send('hello API')
})



app.listen(3030, () => {
    console.log(`server listening on port 3030`)
})