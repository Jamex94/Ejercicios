function getEmails(users) {
    const emails = users.map(user => user.email);
    return emails;
  }