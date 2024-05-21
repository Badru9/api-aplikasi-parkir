const database = require("../database/index");

const loginPegawai = async (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM pegawai WHERE username = '${username}' AND password = '${password}'`;
  database.query(sql, (err, result) => {
    if (err) {
      console.log("error login", err);
    }

    res.status(200).json({
      error: result.length > 0 ? false : true,
      message: result.length > 0 ? "Login success" : "Login failed",
      data: result.length > 0 ? result : "Username or password doesn't match",
    });
  });
};

module.exports = {
  loginPegawai,
};
