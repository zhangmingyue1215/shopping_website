var express = require('express');
var router = express.Router();
var userDao=require('../dao/userDao');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',function (req,res,next) {

  userDao.login(req,res,next);
});
router.post('/reg',function (req,res,next) {

  userDao.reg(req,res,next);
});
router.post('/cSelect',function (req,res,next) {

  userDao.cSelect(req,res,next);
});
router.post('/cIndex',function (req,res,next) {

  userDao.cIndex(req,res,next);
});
router.post('/cIndex2',function (req,res,next) {

  userDao.cIndex2(req,res,next);
});
router.post('/cIndex3',function (req,res,next) {

  userDao.cIndex3(req,res,next);
});
router.post('/sList',function (req,res,next) {

  userDao.sList(req,res,next);
});
router.post('/shoppingCar',function (req,res,next) {

  userDao.shoppingCar(req,res,next);
});
router.post('/shoppingCarDelete',function (req,res,next) {

  userDao.shoppingCarDelete(req,res,next);
});
router.post('/shoppingCarInsert',function (req,res,next) {

  userDao.shoppingCarInsert(req,res,next);
});
router.post('/clearShoppingcar',function (req,res,next) {

  userDao.clearShoppingcar(req,res,next);
});
module.exports = router;
