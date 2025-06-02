function solve() {
  const form = document.querySelector("form");
  const taskInput = document.getElementById("task");
  const descriptionInput = document.getElementById("description");
  const dateInput = document.getElementById("date");

  const sections = document.querySelectorAll("main section");

  const openSectionContainer = sections[1].querySelector("div:last-of-type");
  const inProgressContainer = document.getElementById("in-progress");
  const completeSectionContainer =
    sections[3].querySelector("div:last-of-type");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const task = taskInput.value.trim();
    const description = descriptionInput.value.trim();
    const date = dateInput.value.trim();

    if (!task || !description || !date) {
      return;
    }

    taskInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";

    const article = document.createElement("article");

    const h3 = document.createElement("h3");
    h3.textContent = task;

    const pDescription = document.createElement("p");
    pDescription.textContent = `Description: ${description}`;

    const pDate = document.createElement("p");
    pDate.textContent = `Due Date: ${date}`;

    const div = document.createElement("div");
    div.classList.add("flex");

    const startBtn = document.createElement("button");
    startBtn.textContent = "Start";
    startBtn.classList.add("green");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("red");

    div.appendChild(startBtn);
    div.appendChild(deleteBtn);

    article.appendChild(h3);
    article.appendChild(pDescription);
    article.appendChild(pDate);
    article.appendChild(div);

    openSectionContainer.appendChild(article);

    startBtn.addEventListener("click", () => {
      inProgressContainer.appendChild(article);

      startBtn.remove();

      const finishBtn = document.createElement("button");
      finishBtn.textContent = "Finish";
      finishBtn.classList.add("orange");

      div.appendChild(finishBtn);

      finishBtn.addEventListener("click", () => {
        div.remove();
        completeSectionContainer.appendChild(article);
      });
    });

    deleteBtn.addEventListener("click", () => {
      article.remove();
    });
  });
}
