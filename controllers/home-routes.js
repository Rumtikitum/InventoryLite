const router = require('express').Router();
const {Item, Type} = require('../models/')
const sequelize = require('../config/connection');
//const { Post, User, Comment, Vote } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
    res.render('homepage', {
        loggedIn: req.session.loggedIn
      });
    })

router.get('/typetable', (req, res) => {
  console.log('======================');
    res.render('typetable', {
        loggedIn: req.session.loggedIn
      });
    })

router.get('/edit', (req, res) => {
  console.log('======================');
    res.render('edit', {
        loggedIn: req.session.loggedIn
      });
    })

router.get('/addtype', (req, res) => {
  console.log('======================');
    res.render('addtype', {
        loggedIn: req.session.loggedIn
      });
    })

router.get('/remove', (req, res) => {
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
      logged_in: req.session.logged_in,
      items, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;