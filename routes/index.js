var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/0610199600538', function(req,res,next){
  var datos = [
                {"Nombre": "Daniela Michelle Gonzalez Reyes"},
                {"Cuenta": 0610199600538},
                {"Correo": "daniela.gonzalez1996@yahoo.com"}
              ];
  res.json(datos);
  });

  var usersRegistered = [];

    router.get('/suma', function(req,res,next){
    res.render('suma',{"txtNumero1":"","txtNumero2":"","msg":""});
  });

  router.post('/suma',function(req,res,next){
    console.log(req.body);
      usersRegistered.push(req.body.txtNumero1);
      usersRegistered.push(req.body.txtNumero2);
      var msgs = parseInt(usersRegistered[0])+parseInt(usersRegistered[1]);
      var rtObject = {};
      rtObject.txtNumero1 = req.body.txtNumero1;
      rtObject.txtNumero2 = req.body.txtNumero2;
      rtObject.msg= msgs;
    res.render('suma', rtObject);
  });

module.exports = router;
