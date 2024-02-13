const arr = [1, 2, 3, 4, 5];
arr.forEach((element, index) => {
  setTimeout(() => {
    console.log(element);
  }, 3000 * index);
});
