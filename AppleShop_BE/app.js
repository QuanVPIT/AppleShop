var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

require('./modules/users/UserModel');

require('./modules/categories/CategoryModel');

require('./modules/macs/MacModel');

require('./modules/airpods/AirpodModel');

require('./modules/ipads/IpadModel');

require('./modules/iphones/IphoneModel');

require('./modules/watchs/WatchModel');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var macsRouter = require('./routes/mac');
var airpodsRouter = require('./routes/airpod')
var iphonesRouter = require('./routes/iphones');
var ipadsRouter = require('./routes/ipads');
var watchsRouter = require('./routes/watchs');


var app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://admin:admin@cluster0.nv7f4s5.mongodb.net/CP17201?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch((err) => console.log('>>>>>>>>> DB Error: ', err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/users', usersRouter);

app.use('/san-pham1', macsRouter);

app.use('/san-pham2', airpodsRouter);

app.use('/san-pham3', iphonesRouter);

app.use('/san-pham4', ipadsRouter);

app.use('/san-pham5', watchsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
