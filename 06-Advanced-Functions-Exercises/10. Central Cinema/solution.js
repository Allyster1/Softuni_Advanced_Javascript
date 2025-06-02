function solve() {
  const formRef = document.getElementById("add-new");
  const movieRef = document.getElementById("movies");
  const archiveRef = document.getElementById("archive");

  const clearBtn = archiveRef.querySelector("button");
  clearBtn.addEventListener("click", clearContent);

  const container = document.getElementById("container");
  const [nameRef, hallRef, ticketPriceRef, addBtn] = container.children;

  addBtn.addEventListener("click", addMovie);

  function addMovie(event) {
    event.preventDefault();

    const name = nameRef.value;
    const hall = hallRef.value;
    const ticketPrice = ticketPriceRef.value;

    if (!name || !hall || !ticketPrice || isNaN(ticketPrice)) {
      return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = name;

    const hallElement = document.createElement("strong");
    hallElement.textContent = `Hall: ${hall}`;

    const div = document.createElement("div");

    const price = document.createElement("strong");
    price.textContent = Number(ticketPrice).toFixed(2);

    const input = document.createElement("input");
    input.placeholder = "Tickets Sold";
    input.type = "number";

    const archiveBtn = document.createElement("button");
    archiveBtn.textContent = "Archive";

    archiveBtn.addEventListener("click", () =>
      archiveContent(li, span.textContent, price.textContent, input)
    );

    div.appendChild(price);
    div.appendChild(input);
    div.appendChild(archiveBtn);

    li.appendChild(span);
    li.appendChild(hallElement);
    li.appendChild(div);

    movieRef.querySelector("ul").appendChild(li);

    nameRef.value = "";
    hallRef.value = "";
    ticketPriceRef.value = "";
  }

  function archiveContent(movieLi, name, pricePerTicket, input) {
    const ticketsSold = Number(input.value);
    if (!input.value.trim() || isNaN(ticketsSold)) {
      return;
    }

    const totalAmount = (ticketsSold * Number(pricePerTicket)).toFixed(2);

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = name;

    const strong = document.createElement("strong");
    strong.textContent = `Total amount: ${totalAmount}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => li.remove());

    li.appendChild(span);
    li.appendChild(strong);
    li.appendChild(deleteBtn);

    archiveRef.querySelector("ul").appendChild(li);

    movieLi.remove();
  }

  function clearContent() {
    const ul = archiveRef.querySelector("ul");
    ul.innerHTML = "";
  }
}
