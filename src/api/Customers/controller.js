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

const findCustomerByPlatNo = async (req, res) => {
  console.log("req params", req.params);

  try {
    const sql = `SELECT * FROM customers WHERE plat_no = '${req.params.plat_no}'`;
    database.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }

      console.log(result);
      res.status(200).json({
        message: "Successfully get customers data by plat_no",
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

  const sql = `INSERT INTO customers ( plat_no, jam_masuk ) VALUES ( '${data.plat_no}', '${data.jam_masuk}' )`;
  database.query(sql, req, (err, result) => {
    if (err) {
      console.log(err);
      res.json({
        success: false,
        message: "Kendaraan sudah masuk",
      });
      return;
    }

    console.log("test", result);

    res.status(201).json({
      success: true,
      message: "Successfully insert customers data",
      data: result,
    });
  });
};

const deleteCustomerByID = async (req, res) => {
  const data = req.body;
  const { id } = data;
  console.log(req.body);
  const sql = `DELETE FROM customers WHERE id = '${id}'`;
  database.query(sql, req, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
    console.log("Data terhapus");
  });
};

const updateBiaya = async (req, res) => {
  const data = await req.body;
  const { plat_no, biaya, jam_keluar } = data;
  console.log("update data biaya", data);
  const sql = `UPDATE customers SET biaya = '${biaya}', jam_keluar = '${jam_keluar}' WHERE plat_no = '${plat_no}'`;
  database.query(sql, req, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log("test", result);

    res.status(201).json({
      message: "Successfully insert biaya customers",
      data: result,
    });
  });
};

module.exports = {
  findCustomer,
  findCustomerByPlatNo,
  insertCustomer,
  deleteCustomerByID,
  updateBiaya,
};
