const { PrismaClient } = require("@prisma/client");

const { role } = require("./data-seed");

const prisma = new PrismaClient();

const seedRole = async () => {
  try {
    await prisma.role.createMany({
      data: role,
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};

seedRole();
