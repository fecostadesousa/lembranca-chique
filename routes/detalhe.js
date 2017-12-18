var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('detalhe', { title: 'Detalhe produto 1 - Lembrança Chique - By Rafaela Gonçalves' });
});

module.exports = router;
