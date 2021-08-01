const router = require('express').Router();
const {Item, Type} = require('../models/')
const sequelize = require('../config/connection');
//const { Post, User, Comment, Vote } = require('../models');
// get all posts for homepage
router.get('/', async (req, res) => {
  console.log('======================');
    res.render('homepage', {
        loggedIn: req.session.loggedIn
      });
    })
router.get('/typetable', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
    try {
      const typeData = await Type.findAll();
      // Serialize data so the template can read it
      const types = typeData.map((type) => type.get({ plain: true }));
      // Pass serialized data and session flag into template
      res.render('typetable', { 
        loggedIn: req.session.loggedIn,
        types, 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.get('/edit', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  console.log('======================');
    res.render('edit', {
        loggedIn: req.session.loggedIn
      });
    })
router.get('/addtype', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  console.log('======================');
    res.render('addtype', {
        loggedIn: req.session.loggedIn
      });
    })
router.get('/remove', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  console.log('======================');
    res.render('remove', {
        loggedIn: req.session.loggedIn
      });
    })
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
router.get('/toc', async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  try {
    // Get all items and JOIN with user data
    const itemData = await Item.findAll({
      include: [
        {
          model: Type,
          attributes: ['type_name'],
        },
      ],
    });
    // Serialize data so the template can read it
    const items = itemData.map((item) => item.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('toc', { 
      loggedIn: req.session.loggedIn,
      items, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;