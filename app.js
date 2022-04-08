const express = require('express')
const app = express()

app.use('/public', express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
  response.render('index.ejs')
})


app.listen(3000, () => {
  console.log('app running!')
})