const prisma = require("../db");

exports.checkPhoneAndEmail = async (phone, email) => {
  try {
    // CHECKPHONE
    const checkPhoneAdmin = await prisma.admin.findUnique({
      where: {
        phone,
      },
    });

    if (checkPhoneAdmin) {
      throw new Error("Phone has been used");
    }

    // CHECK EMAIL
    const checkEmailAdmin = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    if (checkEmailAdmin) {
      throw new Error("Email has been used");
    }

    return true;
  } catch (error) {
    return false;
  }
};
