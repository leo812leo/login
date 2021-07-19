//import modlues
const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
//user modlues
require('./config/moongoose')
const routes = require('./routes')

const app = express()
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


//app.use
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// 設定 port 3000
app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})