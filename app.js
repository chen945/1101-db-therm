var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
const crown_76_Router = require('./routes/crown_76')
const crown2_76_Router = require('./routes/crown2_76')
const api_76_Router = require('./routes/api_76')
const midproj_76_Router = require('./routes/midproj_76')
const midterm_76_Router = require('./routes/midterm_76')
const finalproj_76_Router = require('./routes/finalproj_76')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/api_76', api_76_Router)

/* crown_xx */
app.use('/crown_76', crown_76_Router)
app.use('/crown2_76', crown2_76_Router)

/* midproj_xx */
app.use('/midproj_76', midproj_76_Router)

/* midterm_xx */

app.use('/midterm_76', midterm_76_Router)

/* finalproj_xx */

app.use('/finalproj_76', finalproj_76_Router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
