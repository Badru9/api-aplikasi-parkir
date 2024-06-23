const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const prisma = require("./api/database/index");

const app = express();

require("dotenv").config();

const server = require("http").createServer(app);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const api = require("./api");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/admin/:id", upload.single("image"), async (req, res) => {
  const id = req.params.id;

  const image = req?.file.filename;

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const ext = file.originalname.split(".")[1];

      cb(null, `uploads/${id}.${ext}`);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });

  const upload = multer({
    storage: storage,
  });

  console.log("upload", upload);

  try {
    const pegawai = await prisma.admin.update({
      where: {
        id,
      },
      data: {
        image,
      },
    });

    res.status(200).json({
      message: "Image has been updated",
      data: pegawai,
    });
  } catch (error) {
    console.log(error);
  }
});

app.use("/api", api);

module.exports = server;
