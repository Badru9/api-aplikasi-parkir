const Midtrans = require("midtrans-client");
const { v4: uuid } = require("uuid");
// import { NextResponse } from "next/server";

const SERVER_KEY = process.env.NEXT_PUBLIC_SERVER_KEY;
// const url = process.env.MIDTRANS_API;

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: SERVER_KEY,
});

const getToken = async (req, res) => {
  const { name, price, quantity } = await req.body;

  console.log("query transaction", name, price, quantity);

  let parameter = {
    item_details: [
      {
        name: name,
        price: price,
        quantity: quantity,
      },
    ],

    transaction_details: {
      order_id: uuid(),
      gross_amount: price,
      // order_id: id,
      // gross_amount: price * quantity,
    },
  };

  const transaction = await snap
    .createTransaction(parameter)
    .then(async (response) => {
      return response;
    });

  res.status(200).json(transaction);

  //   return NextResponse.json(transaction);
};

module.exports = { getToken };
