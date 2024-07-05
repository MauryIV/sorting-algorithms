// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create bubble sort function
const bubbleSort = (array) => {
  for (let i=0; i<array.length; i++) {
    for (let j=0; j<array.length -i -1; j++) {
      if (array[j] > array[j+1]) {
        let swap = array[j];
        array[j] = array[j+1];
        array[j+1] = swap; 
      }
    }
  }
  return array;
};

const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
