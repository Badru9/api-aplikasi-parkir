module.exports = {
  findCustomer: async () => {
    const sql = "SELECT * FROM customers";
    const customers = await database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result);

      return customers;
    });
  },

  insertCustomer: async (req, res) => {
    const { id, plat_no, jam_masuk } = req.body;
    console.log(req.body);

    const sql = `INSERT INTO customers ( id, plat_no, jam_masuk ) VALUES ( '${id}', '${plat_no}', '${jam_masuk}' )`;
    const insertQuery = database.query(sql, req, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);

      return insertQuery;
    });
  },
};
