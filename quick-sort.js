// Create our input data
const unsortedInputArray = [];
// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create quick sort function
const quickSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[array.length-1];
  const firstArr = [];
  const secondArr= [];

  for (let i=0; i<array.length-1; i++) {
    if (array[i] < pivot) {
      firstArr.push(array[i]);
    } else {
      secondArr.push(array[i]);
    }
  }
  return quickSort(firstArr).concat(pivot, quickSort(secondArr));
};

const sorted = quickSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
