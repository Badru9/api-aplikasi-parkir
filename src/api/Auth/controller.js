const bcrypt = require("bcrypt");
const database = require("../database/index");

const loginPegawai = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = `SELECT * FROM pegawai WHERE username = '${username}' AND password = '${password}'`;
  database.query(sql, (err, result) => {
    if (err) {
      console.log("error login", err);
    }

    const newData = result.map((data) => {
      return {
        id: data.id,
        nama: data.nama,
        username: data.username,
        alamat: data.alamat,
        email: data.email,
        tanggal_lahir: data.tanggal_lahir,
        password: hashedPassword,
      };
    });

    res.status(200).json({
      error: result.length > 0 ? false : true,
      message: result.length > 0 ? "Login success" : "Login failed",
      data: result.length > 0 ? newData : "Username or password doesn't match",
    });
  });
};

module.exports = {
  loginPegawai,
};
