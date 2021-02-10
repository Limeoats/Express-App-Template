const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
	message: "Express App Template API",
    });
});

module.exports = router;
