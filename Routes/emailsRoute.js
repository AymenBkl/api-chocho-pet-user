var express = require('express');
var router = express.Router();
const emails = require('../Controllers/Emails/emails.controller');
const cors = require('../Middlewares/cors');

router.all('/', function(req, res, next) {
    next();
})
.options('/',cors.corsWithOptions,  function(req, res, next) {
    next();
})
.get('/getemails',cors.corsWithOptions, emails.getEmails)

.post('/addemail',cors.corsWithOptions, emails.addEmail);


module.exports = router;

