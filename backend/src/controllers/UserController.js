import { UserModel } from "../models/UserModel.js";

class UserController {
  static async registration(req, res) {
    const { firstName, lastName, email, password } = req.body;

    if(firstName !== undefined && lastName !== undefined && email!== undefined && password!== undefined) {
      const user = { firstName, lastName, email, password };
      const {status, message} = await UserModel.insert(user);
      
      res.status(status).json({message});
    }
    else {
      return res.status(403).json({message: "Preencha todos os campos!"});
    }
  }
}

export { UserController }