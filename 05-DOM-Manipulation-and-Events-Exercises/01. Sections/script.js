function create(sections) {
  const content = document.getElementById("content");

  sections.forEach((section) => {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.textContent = section;
    p.style.display = "none";

    div.appendChild(p);
    div.addEventListener("click", () => {
      p.style.display = p.style.display === "none" ? "" : "none";
    });

    content.appendChild(div);
  });
}
