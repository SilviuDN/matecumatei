const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => res.json( { message: 'Hei!'} ) );

module.exports = router;
