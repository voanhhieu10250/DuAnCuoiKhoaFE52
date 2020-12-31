export const spliceSameArrObj = (arr) => {
  arr.sort().forEach((item, index) => {
    while (item === arr[index + 1]) {
      arr.splice(index + 1, 1);
    }
  });

  return arr;
};
