// Create our input data
const unsortedInputArray = [];

// seed data in unsortedInputArray
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// TODO: create merge sort function
const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }
  const mid = array.length/2;
  const firstHalf = array.slice(0, mid);
  const secondHalf = array.slice(mid, array.length);

  const sortFirstHalf = mergeSort(firstHalf);
  const sortSecondHalf = mergeSort(secondHalf);

  const merge = (firstArr, secondArr) => {
    let sortedArray = [];
    let firstIndex = 0;
    let secondIndex = 0;
    while (firstIndex < firstArr.length && secondIndex < secondArr.length) {
      if (firstArr[firstIndex] < secondArr[secondIndex]) {
        sortedArray.push(firstArr[firstIndex]);
        firstIndex++;
      } else {
        sortedArray.push(secondArr[secondIndex]);
        secondIndex++;
      }
    }
    return sortedArray.concat(firstArr.slice(firstIndex)).concat(secondArr.slice(secondIndex));
  };

  return merge(sortFirstHalf, sortSecondHalf);
};

const sorted = mergeSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
