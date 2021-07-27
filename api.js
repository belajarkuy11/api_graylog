let express = require('express')
let app = express()
let graylog = require('./graylog')
let logger = graylog.log()

app.use( express.json() )

app.listen(3000, () => {
    console.log("server up")
})

app.get('/test', (req, res) => {
    //logger.log("GRAYLOG TEST+++")
    //logger.alert("ALERT WOI")
    logger.error("ERROR WOI")
    res.send('test')
})