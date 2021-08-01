const router = require('express').Router();
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
});

router.get('/edit/:id', withAuth, (req, res) => {

});

module.exports = router;