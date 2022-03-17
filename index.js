function multiplesOf3and5(number) {
  let array = [];
  let totalValue = 0;

  //Creates an array with the numbers below the given number
  for(let i = 0; i < number; i++) {
    array.push(i);  
  }

  //Filters all the multiples of 3 and 5
  array = array.filter((element) => {
    return element % 5 == 0 || element % 3 == 0;
  })

  //Sums the remaining numbers
  totalValue = array.reduce((sum, element) => {
    return sum + element;
  })
  
  return totalValue;
}
