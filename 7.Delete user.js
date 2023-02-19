function deleteUser(users, email) {
    // Verificar que users es un arreglo
    if (!Array.isArray(users)) {
      throw new Error('El primer parámetro debe ser un arreglo');
    }
  
    // Buscar el usuario con el correo proporcionado
    const index = users.findIndex(user => user.email === email);
    
    // Si se encontró al usuario, eliminarlo del arreglo
    if (index !== -1) {
      users.splice(index, 1);
    }
    
    // Devolver el arreglo de usuarios actualizado
    return users;
  }