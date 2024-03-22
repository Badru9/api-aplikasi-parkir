module.exports = {
  findPegawai: async () => {
    const sql = "SELECT * FROM pegawai";
    const pegawai = await database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
    });
    return pegawai;
  },
};
