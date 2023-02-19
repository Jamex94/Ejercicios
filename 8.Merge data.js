function mergeData(users, attendances) {
    return users.map(user => {
      const attendance = attendances.find(a => a.email === user.email);
      return {...user, attendance: attendance ? attendance.attendance : undefined};
    });
  }