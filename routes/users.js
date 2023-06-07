var express = require('express');
var router = express.Router();
const { login, register, current } = require('../controllers/users');
router.post('/login', login);

router.post('/register', register);

router.get('/current', current);

module.exports = router;
