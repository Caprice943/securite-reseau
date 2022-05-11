const router = require("express").Router();

const authUserController = require("../controller/auth.user.controller");
//const authVerif = require("../controller/otp.user.controller");

router.post("/signup", authUserController.register);
router.post("/login", authUserController.login);
//router.post("/verif", authVerif.sendEmail);

module.exports = router;
