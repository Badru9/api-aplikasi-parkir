const prisma = require("../database");

module.exports = {
  create: async (req, res) => {
    try {
      const role = await prisma.role.create({
        data: {
          name: req.body.name,
        },
      });
      res.status(200).json({
        message: "Role has been created",
        data: role,
      });
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      if (req.params.id) {
        const role = await prisma.role.findUnique({
          where: {
            id: req.params.id,
          },
        });
        res.status(200).json(role);
        return;
      }

      const role = await prisma.role.findMany();
      res.status(200).json(role);
    } catch (error) {
      console.log(error);
    }
  },
};
