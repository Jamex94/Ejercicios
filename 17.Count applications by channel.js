function countApplicationsByChannel(students) {
    const applicationsByChannel = {};
    
    for (const student of students) {
      if (student.application) {
        const channel = student.channel;
        if (channel in applicationsByChannel) {
          applicationsByChannel[channel]++;
        } else {
          applicationsByChannel[channel] = 1;
        }
      }
    }
    
    return applicationsByChannel;
  }
  