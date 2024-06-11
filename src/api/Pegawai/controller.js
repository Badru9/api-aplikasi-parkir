const database = require("../database/index");
const bycrypt = require("bcrypt");

const findPegawai = async (req, res) => {
  const sql = "SELECT * FROM pegawai";
  database.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }

    const data = result.map((data) => {
      console.log("data", data);
      const hashedPassword = bycrypt.hashSync(data.password, 10);
      return {
        id: data.id,
        role: data.role,
        nama: data.nama,
        email: data.email,
        alamat: data.alamat,
        tanggal_lahir: data.tanggal_lahir,
        username: data.username,
        password: data.role === "Super Admin" ? hashedPassword : data.password,
      };
    });

    res.status(200).json({
      message: "Successfully get pegawai data",
      data: data,
    });
  });
};

const findPegawaiByID = async (req, res) => {
  const hashedPassword = bycrypt.hash(req.body.password, 10);

  try {
    const sql = `SELECT * FROM pegawai WHERE id = '${req.params.id}'`;
    database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      const data = result.map((data) => {
        return {
          id: data.id,
          role: data.role,
          nama: data.nama,
          email: data.email,
          alamat: data.alamat,
          tanggal_lahir: data.tanggal_lahir,
          username: data.username,
          password:
            data.role === "Super Admin" ? hashedPassword : data.password,
        };
      });

      res.status(200).json({
        message: "Successfully get pegawai data by ID",
        data: data,
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
  const { role, nama, email, alamat, tanggal_lahir, username, password } =
    await req.body;

  try {
    const sql = `INSERT INTO pegawai (role, nama, email, alamat, tanggal_lahir, username, password) VALUE ('${role}','${nama}','${email}','${alamat}','${tanggal_lahir}','${username}','${password}')`;

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
  const { id, role, nama, email, alamat, tanggal_lahir, username, password } =
    await req.body;

  console.log("req fe", req.body);

  try {
    const sql = `UPDATE pegawai SET role = '${role}', nama = '${nama}', email = '${email}', alamat = '${alamat}', tanggal_lahir = '${tanggal_lahir}', username = '${username}', password = '${password}' WHERE id = '${id}'`;

    database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result);

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
