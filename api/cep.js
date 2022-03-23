const express = require("express")
const router = express.Router();
const consultaCep = require('cep-promise');


router.get("/:cep", async (req, res) => {
	try {
        console.log(req.params.cep)
        const cepResult = {
            cep: cepResponse,
            state: estado,
            city: cidade,
            neighborhood: bairro,
            street: rua
          } = await consultaCep(req.params.cep)
          return res.json(cepResult);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});

module.exports = router;