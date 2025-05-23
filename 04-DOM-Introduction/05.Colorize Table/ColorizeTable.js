function colorize() {
  const trRef = document.getElementsByTagName("tr");

  for (let i = 1; i < trRef.length; i += 2) {
    trRef[i].style.backgroundColor = "teal";
  }
}
