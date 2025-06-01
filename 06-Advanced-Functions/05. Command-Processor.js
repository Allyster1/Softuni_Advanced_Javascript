function solution() {
  let state = "";

  return {
    append,
    removeStart,
    removeEnd,
    print,
  };

  function append(str) {
    state += str;
  }

  function removeStart(num) {
    state = state.slice(num);
  }

  function removeEnd(num) {
    state = state.slice(0, -num);
  }

  function print() {
    console.log(state);
  }
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again");
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
