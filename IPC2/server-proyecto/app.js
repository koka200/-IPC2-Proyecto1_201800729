var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var productoRouter = require('./routes/productos');

//PROYECTO
var usuarioRouter = require('./routes/usuario');
var cursoRouter = require('./routes/curso');
var detallecursoRoute = require('./routes/detallecurso');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
	if(req.methods == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(logger('dev'));
app.use(express.json());
app.use("/api", adminRouter);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/api", usersRouter);

//PROYECTO
app.use("/api", usuarioRouter);
app.use("/api", cursoRouter);
app.use("/api", detallecursoRoute);

app.use('/', indexRouter);
app.use("/api", productoRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
