const router = require("express").Router();

const authUserController = require("../controller/auth.user.controller");

router.post("/signup", authUserController.register);
router.post("/login", authUserController.login);

module.exports = router;
