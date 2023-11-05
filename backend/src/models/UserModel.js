import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserModel {
  static async insert(user) {
    const { firstName, lastName, email, password } = user;
    const userExists = await this.findByEmail(email);
    
    if(userExists === null) {
      const newUser = await prisma.user.create({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        },
      });
      return { "status": 201, "message": "created", "userID": newUser.id };
    }
    else {
      return { "status": 401, "message": "User already exists" };
    }
  }

  static async findByEmail(email) {
    return await prisma.user.findUnique({ where: { email } });
  }
}

export { UserModel }