import { prisma } from '../prisma/prisma-client';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return req
      .status(400)
      .json({ message: 'Пожалуйста, заполните обязательные поля' });
  }

  const user = await prisma.user.findFirst({ where: { email } });

  const isPasswordCorrect =
    user && (await bcrypt.compare(password, user.password));

  if (user && isPasswordCorrect) {
    res.status(200).json({ id: user.id, email: user.email, name: user.name });
  } else {
    return res.status(400).json({ message: 'Неверно введет логин или пароль' });
  }
};

const register = async (req, res) => {
  const { email, password, name } = req.body;

  if (!email && !password && !name) {
    return res
      .send(400)
      .json({ message: 'Пожалуйста, заполните обязательные поля' });
  }

  const registredUser = await prisma.user.findFirst({ where: { email } });

  if (registredUser) {
    return res.status(400).json({ message: 'Пользователь уже есть в системе' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await prisma.user.create({
    data: { email, name, hashedPassword },
  });
};

const current = async (req, res) => {
  res.send('/current');
};

module.exports = {
  login,
  register,
  current,
};
