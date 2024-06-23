const prisma = require("../database");
const bcrypt = require("bcrypt");
// const multer = require("multer");
// const path = require("path");

module.exports = {
  get: async (req, res) => {
    const id = await req.params.id;
    console.log("id", id);

    try {
      if (id) {
        const admin = await prisma.admin.findUnique({
          where: {
            id,
          },
          include: {
            role: true,
          },
        });

        console.log("data admin with ID", admin);

        res.status(200).json(admin);
        return;
      }

      const admin = await prisma.admin.findMany({
        include: {
          role: true,
        },
      });

      const data = admin.map((data) => {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(data.password, salt);

        return {
          ...data,
          password: hashedPassword,
        };
      });

      console.log("data admin", data);

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  },

  create: async (req, res) => {
    const data = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    const newData = {
      roleId: req.body.roleId,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    };

    try {
      const admin = await prisma.admin.create({
        data: newData,
      });

      res.status(200).json({
        message: "Admin has been created",
        data: admin,
      });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    console.log("id", id);
    console.log("update admin", data);

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password, salt);
    console.log(hashedPassword);

    const newData = {
      ...data,
      password: hashedPassword,
    };

    console.log("new Data", newData);

    try {
      const pegawai = await prisma.admin.update({
        where: {
          id,
        },

        data: {
          ...newData,
          role: {
            update: {
              name: data.role.name,
            },
          },
        },
      });

      res.status(200).json({
        message: "Admin has been updated",
        data: pegawai,
      });
    } catch (error) {
      console.log(error);
    }
  },

  // updateImage: async (req, res) => {
  //   const id = req.params.id;
  //   const data = req.file;

  //   console.log("data image", data);
  //   const formData = new FormData();

  //   formData.append("image", data);

  //   console.log("form data", formData);

  //   console.log(id);

  //   const storage = multer.diskStorage({
  //     destination: function (req, file, cb) {
  //       const ext = file.originalname.split(".")[1];

  //       cb(null, `./public/uploads/${id}.${ext}`);
  //     },
  //     filename: function (req, file, cb) {
  //       cb(null, file.originalname);
  //     },
  //   });

  //   const upload = multer({
  //     storage: storage,
  //   });

  //   console.log("upload", upload);

  //   console.log("update image", data);
  //   // try {
  //   //   const pegawai = await prisma.admin.update({
  //   //     where: {
  //   //       id,
  //   //     },
  //   //     data: {
  //   //       image: data.image,
  //   //     },
  //   //   });

  //   //   res.status(200).json({
  //   //     message: "Image has been updated",
  //   //     data: pegawai,
  //   //   });
  //   // } catch (error) {
  //   //   console.log(error);
  //   // }
  // },

  destroy: async (req, res) => {
    const id = req.params.id;
    try {
      const pegawai = await prisma.admin.delete({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: "Pegawai has been deleted",
        data: pegawai,
      });
    } catch (error) {
      console.log(error);
    }
  },
};
