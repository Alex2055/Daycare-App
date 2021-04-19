const router = require('express').Router();
//const sequelize = require('sequelize');
const Kids = require('../../models');

//get all kids

router.get('/', (req, res) => {
    Kids.findAll().then(dbKidsdata => res.json(dbKidsdata)).catch(Err => {
        console.log(err);
        res.status(500).json(Err);
    });
});

module.exports = router;
