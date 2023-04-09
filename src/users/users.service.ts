import bcrypt from 'bcrypt';
import { UserRequest } from '../interfaces/UserRequest';
import { db } from '../utils/db';

function findUserByEmail(email: string) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

function createUserByEmailAndPassword(user: UserRequest) {
  user.password = bcrypt.hashSync(user.password, 12);
  return db.user.create({
    data: user,
  });
}

function findUserById(id: string) {
  return db.user.findUnique({
    where: {
      id,
    },
  });
}

export { findUserByEmail, findUserById, createUserByEmailAndPassword };
