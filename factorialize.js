function factorialize(num) {
  return (num > 0) ? (num * factorialize(num - 1)) : 1;
}

console.log('Factorial of 20 = ' + factorialize(20));
