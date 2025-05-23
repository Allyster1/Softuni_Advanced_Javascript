function extractText() {
  const ulRef = document.getElementById("items").children;
  const textAreaRef = document.getElementById("result");
  const result = [];

  for (const li of ulRef) {
    result.push(li.textContent);
  }

  textAreaRef.textContent = result;
}
