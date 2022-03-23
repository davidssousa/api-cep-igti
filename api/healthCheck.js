const express = require("express")
const router = express.Router();

router.get("/", async (req, res) => {
	try {
        res.json({
            success: true,
            content: "Online"
        });
    } catch (error) {
        console.error(eror);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = router;