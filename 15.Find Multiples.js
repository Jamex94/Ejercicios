function getMultiples(num1, num2) {
    const multiples = [];
    let i = num1 + 1;
    while (i < num2) {
      if (i % num1 === 0) {
        multiples.push(i);
      }
      i++;
    }
    return multiples;
  }
  