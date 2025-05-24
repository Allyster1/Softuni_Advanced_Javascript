function solve() {
  const textAreaRef = document.getElementById("input");
  const output = document.getElementById("output");

  let formattedText = textAreaRef.value
    .split(".")
    .map((text) => text.trim())
    .filter((text) => text);

  let textCounter = formattedText.length;
  let counter = 0;
  if (textCounter <= 2) {
    let text = [];
    for (let element of formattedText) {
      text.push(element);
    }
    const paragraph = document.createElement("p");
    paragraph.textContent = text.join(". ") + ".";
    output.appendChild(paragraph);
    text = [];
  } else if (textCounter >= 7) {
    let text = [];
    for (let element of formattedText) {
      if (counter === 3) {
        counter = 0;
        const paragraph = document.createElement("p");
        paragraph.textContent = text.join(". ") + ".";
        output.appendChild(paragraph);
        text = [];
      }
      text.push(element);
      counter++;
    }
    const paragraph = document.createElement("p");
    paragraph.textContent = text.join(". ") + ".";
    output.appendChild(paragraph);
    text = [];
  } else {
    let text = [];
    for (let element of formattedText) {
      if (counter === 3) {
        counter = 0;
        const paragraph = document.createElement("p");
        paragraph.textContent = text.join(". ") + ".";
        output.appendChild(paragraph);
        text = [];
      }
      text.push(element);
      counter++;
    }
    const paragraph = document.createElement("p");
    paragraph.textContent = text.join(". ") + ".";
    output.appendChild(paragraph);
    text = [];
  }
}
