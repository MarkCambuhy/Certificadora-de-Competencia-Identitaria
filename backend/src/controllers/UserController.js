import { UserModel } from "../models/UserModel.js";

class UserController {
  static async registration(req, res) {
    const { firstName, lastName, email, password } = req.body;

    if(firstName !== undefined && email!== undefined) {
      const user = { firstName, lastName, email, password };
      const {status, message, userID} = await UserModel.insert(user);
      
      if(status === 201) {
        return res.status(status).json({message, userID});
      }
      else {
        return res.status(status).json({message});
      }
    }
    else {
      return res.status(403).json({message: "Preencha todos os campos"});
    }
  }
}

export { UserController }