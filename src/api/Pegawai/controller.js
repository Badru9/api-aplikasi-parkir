const database = require("../database/index");

const findPegawai = async (req, res) => {
  const sql = "SELECT * FROM pegawai";
  database.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      message: "Successfully get pegawai data",
      data: result,
    });
  });
};

const findPegawaiByID = async (req, res) => {
  try {
    const sql = `SELECT * FROM pegawai WHERE id = '${req.params.id}'`;
    database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result);
      res.status(200).json({
        message: "Successfully get pegawai data by ID",
        data: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

const insertPegawai = async (req, res) => {
  const data = req.body;
  const { nama, alamat, tanggal_lahir, username, password } = data;
  console.log(data);

  try {
    const sql = `INSERT INTO pegawai (nama, alamat, tanggal_lahir, username, password) VALUE ('${nama}','${alamat}','${tanggal_lahir}','${username}','${password}')`;

    database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      res.status(200).json({
        message: "Insert data success",
        data: result,
      });
    });
  } catch (err) {
    console.log(err);
  }
};

const updatePegawai = async (req, res) => {
  const data = req.body;
  const { id, nama, alamat, tanggal_lahir, username, password } = data;

  try {
    const sql = `UPDATE pegawai SET nama = '${nama}', alamat = '${alamat}', tanggal_lahir = '${tanggal_lahir}', username = '${username}', password = '${password}' WHERE id = '${id}'`;

    database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      res.status(200).json({
        message: "Update data pegawai berhasil",
        data: result.info,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePegawaiByID = async (req, res) => {
  const sql = `DELETE FROM pegawai WHERE id = '${req.params.id}'`;

  database.query(sql, (err) => {
    if (err) console.log(err);

    res.status(200).json({
      message: "Delete pegawai data success",
    });
  });
};

module.exports = {
  findPegawai,
  findPegawaiByID,
  insertPegawai,
  updatePegawai,
  deletePegawaiByID,
};
