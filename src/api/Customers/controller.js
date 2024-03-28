const database = require("../database/index");

const findCustomer = async (req, res) => {
  try {
    const sql = "SELECT * FROM customers";
    database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result);
      res.status(200).json({
        message: "Successfully get customers data",
        data: result,
      });
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
const findCustomerByID = async (req, res) => {
  try {
    const sql = `SELECT * FROM customers WHERE id = '${req.params.id}'`;
    database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result);
      res.status(200).json({
        message: "Successfully get customers data by ID",
        data: result,
      });
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const insertCustomer = async (req, res) => {
  const data = await req.body;

  console.log("data", data.id);

  const sql = `INSERT INTO customers ( id, plat_no, jam_masuk ) VALUES ( '${data.id}', '${data.plat_no}', '${data.jam_masuk}' )`;
  database.query(sql, req, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log("test", result);

    res.status(201).json({
      message: "Successfully insert customers data",
      data: result,
    });
  });
};

const deleteCustomer = async (req, res) => {
  const data = req.body;
  const { id, jam_keluar } = data;
  console.log(req.body);
  const sql = `UPDATE customers SET jam_keluar = '${jam_keluar}' WHERE id = '${id}'`;
  // const sql = `DELETE FROM customers WHERE id = '${id}'`;
  const deleteQuery = database.query(sql, req, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);

    return deleteQuery;
  });
};

module.exports = {
  findCustomer,
  findCustomerByID,
  insertCustomer,
  deleteCustomer,
};
