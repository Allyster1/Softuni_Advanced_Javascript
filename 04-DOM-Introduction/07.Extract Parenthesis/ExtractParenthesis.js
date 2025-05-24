function extract(content) {
  let text = document.getElementById(content).textContent;
  let result = "";
  let pattern = /\((.+?)\)/g;

  let match = pattern.exec(text);

  while (match) {
    result += match[1];
    result += "; ";

    match = pattern.exec(text);
  }

  return result;
}
