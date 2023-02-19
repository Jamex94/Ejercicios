function countStudents(students, countries, countryName) {
    // Primero, buscamos el país correspondiente al nombre que recibimos
    const country = countries.find(country => country.name === countryName);
  
    if (!country) {
      // Si no encontramos el país, retornamos 0
      return 0;
    }
  
    // Obtenemos el ID del país encontrado
    const countryId = country.id;
  
    // Luego, contamos cuántos estudiantes pertenecen a ese país
    const count = students.filter(student => student.country_id === countryId).length;
  
    // Finalmente, retornamos el número de estudiantes
    return count;
  }