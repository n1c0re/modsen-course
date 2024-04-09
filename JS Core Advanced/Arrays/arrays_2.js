const sumFirstHalf = (array) => {
  let sum = 0;
  const halfLength = Math.ceil(array.length / 2);

  for (let i = 0; i < halfLength; i++) {
    sum += array[i];
  }

  return sum;
}