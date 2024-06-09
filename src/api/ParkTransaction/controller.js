const database = require("../database/index");
const { v4: uuid } = require("uuid");

const getTransaction = async (req, res) => {
  try {
    const sql = `SELECT * FROM transaksi_parkir`;
    database.query(sql, req, (err, result) => {
      if (err) {
        console.log(err);
        res.json({
          success: false,
          message: "Failed to get park transaction data",
        });
        return;
      }

      res.json({
        success: true,
        message: "Successfully get park transaction data",
        data: result,
      });
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const insertParkTransaction = async (req, res) => {
  const data = await req.body;
  const { id_pegawai, plat_no } = data;

  const id_transaksi = `4P-${uuid()}`;

  const sql = `INSERT INTO transaksi_parkir (id_transaksi, id_pegawai, plat_no) VALUES ('${id_transaksi}','${id_pegawai}', '${plat_no}')`;

  database.query(sql, req, (err, result) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        message: "Failed to insert park transaction data",
      });
      return;
    }

    const data = {
      id: id_transaksi,
      id_pegawai,
      plat_no,
    };

    res.json({
      success: true,
      message: "Successfully insert park transaction data",
      data: data,
    });
  });
};

module.exports = { insertParkTransaction, getTransaction };
