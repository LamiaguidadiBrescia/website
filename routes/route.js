/* IT route */
// require and instantiate express
const express = require("express");

// and express-router
const router = express.Router();

// switch between different languages
function langSwitcher(cookie) {
  switch(cookie) {
  case "IT":
    lang = 0;
    break;
  case "ES":
    lang = 1;
    break;
  default:
    lang = 0;
  }
};


// home page
router.get('/', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('home', {
    navlink : '/',
    structure : req.app.locals.structure,
    structure2 : req.app.locals.structure2,
    lang : lang
  });
});

// una guida per te
router.get('/guidaperte', function(req, res) {
  
  langSwitcher(req.cookies.language);
  
  res.render('guidaperte', {
    navlink : '/guidaperte',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// il calendario
router.get('/calendario', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('calendario', {
    navlink : '/calendario',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// gli itinerari classici
router.get('/itinerariclassici', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('itinerariclassici', {
    navlink : '/itinerariclassici',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// gli itinerari didattici
router.get('/itinerarididattici', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('itinerarididattici', {
    navlink : '/itinerarididattici',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// gli itinerari a tema
router.get('/itineraritema', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('itineraritema', {
    navlink : '/itineraritema',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// gli itinerari storici
router.get('/itineraristorici', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('itineraristorici', {
    navlink : '/itineraristorici',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// gli itinerari dei laghi
router.get('/itinerarilaghi', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('itinerarilaghi', {
    navlink : '/itinerarilaghi',
    structure : req.app.locals.structure,
    lang : lang
  });
});





// in evidenza
router.get('/evidenza', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('evidenza', {
    navlink : '/evidenza',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// regala una visita
router.get('/regalavisita', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('regalavisita', {
    navlink : '/regalavisita',
    structure : req.app.locals.structure,
    lang : lang
  });
});

// contattami
router.get('/contatti', function(req, res) {

  langSwitcher(req.cookies.language);
  
  res.render('contatti', {
    navlink : '/contatti',
    structure : req.app.locals.structure,
    lang : lang
  });
});

module.exports = router;
