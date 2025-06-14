window.addEventListener("load", solve);

function solve() {
  const ticketPurchaseUI = document.getElementById("ticket-purchase");
  const ticketPreviewUI = document.getElementById("ticket-preview");
  const bottomContentUI = document.querySelector(".bottom-content");

  const ticketNumberRef = document.getElementById("num-tickets");
  const seatingPrefRef = document.getElementById("seating-preference");
  const fullNameRef = document.getElementById("full-name");
  const emailRef = document.getElementById("email");
  const phoneRef = document.getElementById("phone-number");

  const purchaseBtn = document.getElementById("purchase-btn");

  purchaseBtn.addEventListener("click", onPurchase);

  function clearHTML() {
    ticketNumberRef.value = "";
    seatingPrefRef.value = "seating-preference";
    fullNameRef.value = "";
    emailRef.value = "";
    phoneRef.value = "";
  }

  function onPurchase(e) {
    e.preventDefault();

    const ticketsNumber = ticketNumberRef.value;
    const seatingPref = seatingPrefRef.value;
    const fullName = fullNameRef.value.trim();
    const email = emailRef.value.trim();
    const phone = phoneRef.value.trim();

    if (
      !ticketsNumber ||
      seatingPref === "seating-preference" ||
      !fullName ||
      !email ||
      !phone
    ) {
      return;
    }

    const li = document.createElement("li");
    li.classList.add("ticket-purchase");

    li.innerHTML = `
    <article>
      <p>Count: ${ticketsNumber}</p>
      <p>Preference: ${seatingPref}</p>
      <p>To: ${fullName}</p>
      <p>Email: ${email}</p>
      <p>Phone Number: ${phone}</p>
    </article>
    <div class="btn-container">
      <button class="edit-btn">Edit</button>
      <button class="next-btn">Next</button>
    </div>
    `;

    ticketPreviewUI.appendChild(li);
    purchaseBtn.disabled = true;
    clearHTML();

    const editBtn = li.querySelector(".edit-btn");
    const nextBtn = li.querySelector(".next-btn");

    editBtn.addEventListener("click", () => {
      purchaseBtn.disabled = false;

      ticketNumberRef.value = ticketsNumber;
      seatingPrefRef.value = seatingPref;
      fullNameRef.value = fullName;
      emailRef.value = email;
      phoneRef.value = phone;

      li.remove();
    });

    nextBtn.addEventListener("click", () => {
      li.innerHTML = `
      <article>
        <p>Count: ${ticketsNumber}</p>
        <p>Preference: ${seatingPref}</p>
        <p>To: ${fullName}</p>
        <p>Email: ${email}</p>
        <p>Phone Number: ${phone}</p>
        <button class="buy-btn">Buy</button>
      </article>
    `;
      ticketPurchaseUI.appendChild(li);

      const buyBtn = li.querySelector(".buy-btn");

      buyBtn.addEventListener("click", () => {
        li.remove();
        const purchaseHeader = document.createElement("h2");
        purchaseHeader.textContent = "Thank you for your purchase!";

        const backBtn = document.createElement("button");
        backBtn.textContent = "Back";
        backBtn.classList.add("back-btn");

        bottomContentUI.appendChild(purchaseHeader);
        bottomContentUI.appendChild(backBtn);

        backBtn.addEventListener("click", () => {
          purchaseHeader.remove();
          backBtn.remove();
          purchaseBtn.disabled = false;
        });
      });
    });
  }
}
