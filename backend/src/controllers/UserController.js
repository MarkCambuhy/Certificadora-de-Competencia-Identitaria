import { UserService } from "../services/UserService.js";

class UserController {
  static async registration(req, res) {
    const newUser = req.body;
    if(this.#checkFields(newUser)) {   
      const response = await UserService.insert(newUser);
      
      switch(response) {
        case "Usuário criado!":
          return res.status(201).json({"message": response});
        case "Usuário já existe!":
          return res.status(401).json({"message": response});
        default: return res.status(500).json({"message": response});;
      }
    }
    else {
      return res.status(403).json({"message": "Preencha todos os campos!"});
    }
  }
  
  static #checkFields(fields) {
    let check = true;
    if(Object.keys(fields).length < 4) {
      return false;
    }
    else {
      for(const value in fields) {
        if(fields[value] == "") {
          check = false;
          break;
        }
      }
      return check;
    }
  }
}

export { UserController }