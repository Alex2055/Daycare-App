const router = require('express').Router();
const kidRoutes = require('./kidRoutes');

router.use('/kids', kidRoutes);

module.exports = router;