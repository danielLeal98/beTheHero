const express = require('express');
const crypto = require('crypto');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();



routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);




routes.post('/incidents', IncidentController.create);

module.exports = routes;