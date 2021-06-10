var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();
var helmet = require('helmet');

const emailsRouter = require('./Routes/emailsRoute');
const productRouter = require('./Routes/productRouter');
const httpsRedirect = require('./Middlewares/https.redirect');
const mongoose = require('./Middlewares/mongoose');
const cors = require('./Middlewares/cors');
const sendEmailHandler = require('./Controllers/Emails/sendEmail').sendEmail;
sendEmailHandler()
const sendEmail = require('./Middlewares/nodemailer');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('aymenxyzbkl12345678910'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(httpsRedirect);
app.use(cors.corsWithOptions);

sendEmail.createTransporter();
app.use('/api/user/emails',emailsRouter);
app.use('/api/user/products',productRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(err.status || 404);
  res.render('error');
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.use(helmet());

module.exports = app;
