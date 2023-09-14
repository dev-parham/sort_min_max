function main() {
  let input = [2, 6, 5, 9, 13, 23, -3, 0, 45];
  let minimumResult = minimumFinder(input);
  let maximumResult = maximumFinder(input);
  let sortResult = sort(input);

  console.log("The minimum of the entry array is: " + minimumResult);
  console.log("The maximum of the entry array is: " + maximumResult);
  console.log("Sorted array is: " + sortResult);
}

main();

//Part1 (Fining the Max. and Min.)
function maximumFinder(mainArray) {
  let maximum = null;
  for (let i = 0; i < mainArray.length; i++) {
    if (+mainArray[i] > maximum) {
      maximum = mainArray[i];
    }
  }
  return maximum;
}

function minimumFinder(mainArray) {
  let minimum = null;
  for (let i = 0; i < mainArray.length; i++) {
    if (+mainArray[i] < minimum) {
      minimum = mainArray[i];
    }
  }
  return minimum;
}

function switcher(index1, index2, array) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

function sort(array) {
  let temp = null;
  let index = null;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      array = switcher(i, i + 1, array);
      temp = array[i];
      index = i;
      for (let j = i - 1; j >= 0; j--) {
        if (temp < array[j]) {
          array = switcher(j, index, array);
          index--;
        }
      }
    }
  }
  return array;
}
