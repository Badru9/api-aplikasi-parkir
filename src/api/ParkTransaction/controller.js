const prisma = require("../database/index");
const { v4: uuid } = require("uuid");

const getTransaction = async (req, res) => {
  const data = await prisma.transaction.findMany();

  res.json({
    success: true,
    message: "Successfully get park transaction data",
    data: data,
  });
};

const insertParkTransaction = async (req, res) => {
  const { id_pegawai, plat_no } = req.body;

  const id_transaksi = `4P-${uuid()}`;

  const data = await prisma.transaction.create({
    data: {
      id: id_transaksi,
      id_pegawai,
      plat_no,
    },
  });

  res.json({
    success: true,
    message: "Successfully insert park transaction data",
    data: data,
  });
};

module.exports = { insertParkTransaction, getTransaction };
