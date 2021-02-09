var express = require('express');
var router = express.Router();

const userData = require('../services/userData')
const Parser = require('../services/parser')

router.get('/tegger/:uid', async (req, res, next) => {
    let uid = req.params.uid
    let interactions = await userData.getInteractions(uid)
    console.log('interactions: ', interactions)
    let cryptos = await Parser.parse(interactions)
    res.send({
        cryptos
    })

})
module.exports = router;