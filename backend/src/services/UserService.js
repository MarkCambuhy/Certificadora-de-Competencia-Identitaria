import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class UserService {
  static async insert(user) {
    const { firstName, lastName, email, password } = user;
    try {
      const userExists = await prisma.user.findUnique({ where: { email } });
    
      if(userExists === null) {
        const encryptedPassword = await bcrypt.hash(password, 10);
        await prisma.user.create({
          data: {
            firstName,
            lastName,
            email,
            password: encryptedPassword,
            profile: {
              create: {}
            }
          },
          include: {
            profile: true
          }
        });
        return "Usuário criado com sucesso!";
      }
      else {
        return "Usuário já existe!";
      }
    }
    catch (error) {
      return error;
    }
  }
}

export { UserService }