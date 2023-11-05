import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserModel {
  static async insert(user) {
    const { firstName, lastName, email, password } = user;
    try {
      const userExists = await prisma.user.findUnique({ where: { email } });
    
      if(userExists === null) {
        const newUser = await prisma.user.create({
          data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          },
        });
        return { "status": 201, "message": "Usuário criado!" };
      }
      else {
        return { "status": 401, "message": "Usuário já existe!" };
      }
    }
    catch (error) {
      return {"status": 500, "message": error }
    }
  }
}

export { UserModel }