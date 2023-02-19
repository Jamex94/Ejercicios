function findMostCommonAge(students) {
    // Creamos un objeto para almacenar la cantidad de veces que aparece cada edad
    const ageCounts = {};
  
    // Recorremos el arreglo de estudiantes y contamos cuántas veces aparece cada edad
    students.forEach(student => {
      const age = student.age;
      if (ageCounts[age]) {
        ageCounts[age]++;
      } else {
        ageCounts[age] = 1;
      }
    });
  
    // Encontramos la edad que aparece más veces
    let mostCommonAge;
    let highestCount = 0;
    for (const [age, count] of Object.entries(ageCounts)) {
      if (count > highestCount) {
        mostCommonAge = age;
        highestCount = count;
      }
    }
  
    // Retornamos la edad que aparece más veces
    return Number(mostCommonAge);
  }