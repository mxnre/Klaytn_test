
const multiples = (number) => {
  let sum = 0;
  for(var i = 1; i < number; i++){
    if((i % 3 === 0 )||(i % 5 === 0)){
      sum = sum + i;
    }
  }
  return sum;
}

module.exports = {
    multiples
}