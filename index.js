const express = require('express')
const app = express()
app.set('view engine', 'ejs')
const port = 3000



app.get('/', (res, req) => {
    res.render('index')
})

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port ${port}`)
})