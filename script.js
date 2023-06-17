

function secondLargest(numbers) {
    if (numbers.length < 2) {
      return null; // Return null if the array has less than 2 numbers
    }
    
    let largest = numbers[0];
    let secondLargest = null;
    
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        secondLargest = largest;
        largest = numbers[i];
      } else if (numbers[i] > secondLargest) {
        secondLargest = numbers[i];
      }
    }
    
    return secondLargest;
  }
  
  const numbers = [53, 67, 99, 107, 39];
  const result = secondLargest(numbers);
  console.log(result);
