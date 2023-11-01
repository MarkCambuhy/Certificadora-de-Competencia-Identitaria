class User {
  static userList = [];

  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  static insert(user) {
    const verify = this.userList.filter(u => u.id === user.id);

    if(verify.length === 0) {
      this.userList.push(user);
      return true;
    }
    else {
      return false;
    }
  }
}

export { User }