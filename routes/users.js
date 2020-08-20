var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({message: 'This is users page'});
});

router.get('/login', (req, res, next) => {
  res.json({message: 'This is login page.'})
})

module.exports = router;
