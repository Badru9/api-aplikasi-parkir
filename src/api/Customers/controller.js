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
    const { licensePlate, trash } = req.query;

    console.log("trash", trash);

    if (licensePlate) {
      const customers = await prisma.pengguna.findUnique({
        where: {
          licensePlate,
        },
      });

      res.status(200).json(customers);
      return;
    } else {
      const customers = await prisma.pengguna.findMany({
        where: {
          trash: parseInt(trash),
        },
      });
      // console.log("data customers", customers);
      res.status(200).json(customers);
    }
  },

  update: async (req, res) => {
    const { licensePlate } = req.body;

    const customers = await prisma.pengguna.update({
      where: {
        licensePlate,
      },
      data: {
        ...req.body,
        trash: 1,
      },
    });
    console.log("updated customer data", customers);
    res.status(200).json(customers);
  },

  destroy: async (req, res) => {
    const { licensePlate } = req.query;

    console.log("jalan", req.query);
    const customers = await prisma.pengguna.delete({
      where: {
        licensePlate,
      },
    });
    console.log("deleted", customers);
    res.status(200).json(customers);
  },
};
