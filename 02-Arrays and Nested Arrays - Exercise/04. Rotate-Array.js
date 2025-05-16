function rotateArray(array, rotations) {
  for (let i = 0; i < rotations; i++) {
    const last = array.pop();
    array.unshift(last);
  }

  console.log(array.join(" "));
}

rotateArray(["1", "2", "3", "4"], 6);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
