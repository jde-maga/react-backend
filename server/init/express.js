/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   express.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:17:07 by Julien de M       #+#    #+#             */
/*   Updated: 2017/11/13 16:25:02 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const logger = require('../lib/logger');

const app = express();

/**
 * Hot reload configuration
 */

/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const webpackConfig = require('../../webpack.config.js');

const compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));
/* eslint-enable import/no-extraneous-dependencies */

passport.use(new LocalStrategy((username, password, done) => {
  console.log(username, password);
  return done(null, username);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.set('showStackError', true);
app.set('root', '/');
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));
app.use(cors());
app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, '../../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
  type: '*/*',
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', require('./routes.js'));

const server = app.listen(8080, () => {
  logger.info('node', 'Started server on port 8080');
});

server.on('error', (error) => {
  logger.error('node', error);
});

module.exports = server;
