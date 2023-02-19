function findUser(users, name) {
    const foundUser = users.find(user => user.name === name);
    return foundUser;
  }
  