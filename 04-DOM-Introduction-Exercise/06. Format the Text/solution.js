function solve() {
  const textAreaRef = document.getElementById("input");
  const output = document.getElementById("output");

  const sentances = textAreaRef.value
    .split(".")
    .map((text) => text.trim())
    .filter((text) => text.length > 0);

  if (sentances.length === 0) {
    return;
  }

  const sentanceSize = sentances.length <= 2 ? sentances.length : 3;
  const textArray = [];

  for (let i = 0; i < sentances.length; i += sentanceSize) {
    let slicedSentance = sentances.slice(i, i + sentanceSize);
    textArray.push(slicedSentance);
  }

  for (let items of textArray) {
    const paragraph = document.createElement("p");
    paragraph.textContent = items.join(". ") + ".";
    output.appendChild(paragraph);
  }
}
