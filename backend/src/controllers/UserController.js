import { UserService } from "../services/UserService.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import createAccessToken from "../libs/jwt.js";
import bcrypt from "bcrypt";

class UserController {
  static async find(req, res) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      const user = await prisma.user.findUnique({
        where: { email: req.body.email },
      });
      if (!user) return res.status(401).json("Wrong Credentials!");
      const passwordIsValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) return res.status(401).json("Wrong Credentials!");
      const token = createAccessToken(user);
      res.cookie("token", token, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      const { password, ...other } = user;
      other.token = token;
      res.status(200).json(other);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async registration(req, res) {
    const newUser = req.body;
    if (this.#checkFields(newUser)) {
      const response = await UserService.insert(newUser);

      switch (response) {
        case "Usuário criado com sucesso!":
          return res.status(201).json({ message: response });
        case "Usuário já existe!":
          return res.status(401).json({ message: response });
        default:
          return res.status(500).json({ message: response });
      }
    } else {
      return res.status(403).json({ message: "Preencha todos os campos!" });
    }
  }

  static #checkFields(fields) {
    let check = true;
    if (Object.keys(fields).length < 4) {
      return false;
    } else {
      for (const value in fields) {
        if (fields[value] == "") {
          check = false;
          break;
        }
      }
      return check;
    }
  }
}

export { UserController };
