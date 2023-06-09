const { prisma } = require('../prisma/prisma-client');

const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany();
    res.status(200).json(employees);
  } catch {
    res.status(400).json({ message: 'Не удалось получить сотрудников' });
  }
};

const add = async (req, res) => {
  try {
    const data = req.body;
    if (!data.firstName || !data.lastName || !data.adress || !data.age) {
      return res.status(400).json('Все поля обязательны');
    }
    const employee = await prisma.user.update({
      where: { id: req.user.id },
      data: { createdEmployee: { create: data } },
    });

    return res.status(500).json({ message: 'Что-то пошло не так' });
  } catch {}
};
module.exports = {
  all,
  add,
};