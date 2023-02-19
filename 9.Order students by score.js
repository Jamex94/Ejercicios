function orderStudentsByScore(students) {
    // Ordenamos el arreglo de estudiantes utilizando el método sort()
    // y especificando que queremos ordenar por la propiedad "score"
    students.sort((a, b) => a.score - b.score);
  
    // Retornamos el arreglo ordenado
    return students;
  }