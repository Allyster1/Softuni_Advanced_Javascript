function solve() {
  //Helper functions
  function convertCamelCase(splitText) {
    let result = [];

    if (splitText.length > 0) {
      result.push(splitText[0].toLowerCase());
    }

    for (let i = 1; i < splitText.length; i++) {
      let word = splitText[i];
      result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }

    return result.join("");
  }

  function convertPascalCase(splitText) {
    let result = [];

    for (let i = 0; i < splitText.length; i++) {
      let word = splitText[i];
      result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    }

    return result.join("");
  }

  // Dom Manipulation

  const textRef = document.getElementById("text").value;
  const conventionRef = document.getElementById("naming-convention").value;
  let resultRef = document.getElementById("result");

  let sentance = "";

  if (conventionRef === "Camel Case") {
    let words = textRef.split(" ");
    sentance = convertCamelCase(words);
  } else if (conventionRef === "Pascal Case") {
    let words = textRef.split(" ");
    sentance = convertPascalCase(words);
  } else {
    sentance = "Error!";
  }

  resultRef.textContent = sentance;
}
