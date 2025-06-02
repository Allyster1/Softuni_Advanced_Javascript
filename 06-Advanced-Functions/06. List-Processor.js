function processArray(arrayData) {
  let output = [];
  const objectMethods = {
    add: (str) => output.push(str),
    remove: (str) => {
      output = output.filter((item) => item !== str);
    },
    print: () => console.log(output.join(",")),
  };

  arrayData.forEach((element) => {
    const [type, str] = element.split(" ");
    objectMethods[type](str);
  });
}

processArray(["add hello", "add again", "remove hello", "add again", "print"]);

// processArray(["add pesho", "add george", "add peter", "remove peter", "print"]);

// processArray(["add hello", "add again", "remove hello", "add again", "print"]);
