const express = require("express");
const {Router} = require("express");
const router = express.Router();

router.get('/add-new', (req,res) => {
    return res.render('addBlog' , {
        user: req.user,

    })
})

module.exports = router;