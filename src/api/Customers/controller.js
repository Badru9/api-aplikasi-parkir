const prisma = require("../database");

module.exports = {
  create: async (req, res) => {
    try {
      const data = req.body;

      console.log("data dari fe", data);

      const customers = await prisma.pengguna.create({
        data,
      });
      console.log("data customers", customers);
      res.status(201).json({
        success: true,
        message: "Customer berhasil dimasukkan",
        data: customers,
      });
    } catch (error) {
      console.log("gagal");
      res.status(500).json({
        success: false,
        message: error.message,
      });
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
