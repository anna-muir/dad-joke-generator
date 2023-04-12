const dotenv = require('dotenv')
dotenv.config()
const fetch = require('node-fetch')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors')
const { response } = require('express')
app.use(cors())

app.use(express.static('website'))

//PORT local server
const port = 5002
const server = app.listen(port, () => {
    console.log(`Running on localhost ${port}`)
})



// Fetch api data

app.get('/jokes', async (request, response, next) => {
    const key = process.env.KEY
    const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=1'
    const options = {
        url: url,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': key
        }
    }

    // console.log('options', options)
    const fetch_response = await fetch(options.url, options)
    // console.log('headers', fetch_response.headers.get('Content-Type'));
    // console.log('fetch response', fetch_response)
    const json = await fetch_response.json()
    // console.log('json', json)
    response.json(json)

})



