const ModelUser = require("../model/user.model");

module.exports.register = async (req, res) => {
  const { first, last, email, password, phone, poste } = req.body;
  try {
    const user = await ModelUser.create({
      name: { first, last },
      email,
      password,
      phone,
      poste,
    });
    res.status(200).json({ user: user._id });
  } catch (err) {
    res.status(400).send({ err });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await ModelUser.login(email, password);
    res.status(200).json({ email: user.email });
  } catch (err) {
    console.log(err);
    res.status(400).send({ err });
  }
};
