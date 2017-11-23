/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   routes.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jde-maga <jde-maga@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2017/09/01 15:38:53 by Julien de M       #+#    #+#             */
/*   Updated: 2017/11/13 20:20:20 by jde-maga         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const express = require('express');
const login = require('connect-ensure-login');
const passport = require('passport');

const router = express.Router();

router.get('/ping', (req, res) => res.json('Pong.'));

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
}));
router.get('/login', login.ensureLoggedOut(), (req, res) => res.render('login'));

router.get('*', login.ensureLoggedIn(), (req, res) => res.render('index'));

router.get('/me', (req, res) => res.json(req.user));


module.exports = router;
