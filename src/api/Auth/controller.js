const prisma = require("../database");
const { compare } = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      console.log(email, password);

      const user = await prisma.admin.findUnique({
        where: {
          email,
          trash: 0,
        },
        include: {
          role: true,
        },
      });

      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
        return;
      }

      const checkPassword = await compare(password, user.password);

      console.log(checkPassword);

      if (!checkPassword) {
        res.status(401).json({
          message: "Email or password is incorrect",
        });
        return;
      }

      res.status(200).json({
        message: "Login success",
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
