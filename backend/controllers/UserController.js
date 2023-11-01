import { User } from "../model/User.js";

class UserController {
  static registration(req, res) {
    const { userId, userEmail, userPassword } = req.body;

    if(userEmail !== undefined && userPassword !== undefined) {
      const user = new User(Math.floor(Math.random() * 1000), userEmail, userPassword);

      if(User.insert(user)) {
        return res.status(201).json({user});
      }
      else {
        return res.status(403).json({message: "Já existe um usuário com este id"});
      }
    }
    else {
      return res.status(403).json({message: "Preencha todos os campos"});
    }
  }

  static getUser(req, res) {
    const users = User.userList;

    if(users.length > 0) {
      return res.status(200).json({users});
    }
    else {
      return res.status(404).json({message: "Não existem usuários cadastrados"});
    }
  }
}

export { UserController }