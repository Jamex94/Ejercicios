function getApplications(users) {
    const filteredUsers = users.filter(user => user.application !== null && user.application !== undefined);
    return filteredUsers;
  }
  