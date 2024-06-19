const prisma = require("../database");

module.exports = {
  create: async (req, res) => {
    try {
      const data = req.body;

      const newData = {
        licensePlate: data.licensePlate,
        timeIn: data.timeIn,
      };

      console.log("customer data", newData);

      const customers = await prisma.pengguna.create({
        data: newData,
      });
      console.log("data customers", customers);
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  get: async (req, res) => {
    const id = req.params.id;

    console.log(id);

    if (id) {
      const customers = await prisma.pengguna.findUnique({
        where: {
          id,
        },
      });

      console.log("data customer with ID", customers);
      res.status(200).json(customers);
      return;
    } else {
      const customers = await prisma.pengguna.findMany();
      console.log("data customers", customers);
      res.status(200).json(customers);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    const customers = await prisma.pengguna.update({
      where: {
        id,
      },
      data,
    });
    console.log("updated customer data", customers);
    res.status(200).json(customers);
  },

  destroy: async (req, res) => {
    const id = req.params.id;
    const customers = await prisma.pengguna.delete({
      where: {
        id,
      },
    });
    console.log("deleted", customers);
    res.status(200).json(customers);
  },
};
