var express = require('express');
var router = express.Router();
const emails = require('../Controllers/Emails/emails.controller');
const cors = require('../Middlewares/cors');
var helmet = require('helmet');

router.use(helmet());
router.all('/', function(req, res, next) {
    next();
})
.options('/',cors.corsWithOptions,  function(req, res, next) {
    next();
})
.get('/getemails',cors.corsWithOptions, emails.getEmails)

.post('/addcontact',cors.corsWithOptions, emails.addContact)

.post('/addemail',cors.corsWithOptions, emails.addEmail);


module.exports = router;


