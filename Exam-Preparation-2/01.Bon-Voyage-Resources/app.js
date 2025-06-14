window.addEventListener("load", solve);

function solve() {
  const infoRef = document.querySelector(".info-list");
  const confirmRef = document.querySelector(".confirm-list");
  const okRef = document.getElementById("ok");

  const firstNameRef = document.getElementById("first-name");
  const lastNameRef = document.getElementById("last-name");

  const fromDateRef = document.getElementById("from-date");
  const toDateRef = document.getElementById("to-date");

  const nextBtnRef = document.getElementById("next-btn");

  nextBtnRef.addEventListener("click", scheduleVacation);

  function clearHTML() {
    firstNameRef.value = "";
    lastNameRef.value = "";
    fromDateRef.value = "";
    toDateRef.value = "";
  }

  function scheduleVacation(e) {
    e.preventDefault();
    const firstName = firstNameRef.value;
    const lastName = lastNameRef.value;
    const fromDate = fromDateRef.value;
    const toDate = toDateRef.value;

    if (
      !firstName ||
      !lastName ||
      !fromDate ||
      !toDate ||
      !(Date.parse(fromDate) < Date.parse(toDate))
    ) {
      return;
    }

    nextBtnRef.disabled = true;
    clearHTML();

    const li = `
    <li class="vacation-content">
        <article>
            <h3>Name: ${firstName} ${lastName}</h3>
            <p>From date: ${fromDate}</p>
            <p>To date: ${toDate}</p>
        </article>
        <button class="edit-btn">Edit</button>
        <button class="continue-btn">Continue</button>
    </li>
    `;

    infoRef.innerHTML = li;

    const editBtn = document.querySelector(".edit-btn");
    const continueBtn = document.querySelector(".continue-btn");

    editBtn.addEventListener("click", () => {
      infoRef.innerHTML = "";

      firstNameRef.value = firstName;
      lastNameRef.value = lastName;
      fromDateRef.value = fromDate;
      toDateRef.value = toDate;
      nextBtnRef.disabled = false;
    });

    continueBtn.addEventListener("click", () => {
      nextBtnRef.disabled = true;

      infoRef.innerHTML = "";
      const li = `
        <li class="vacation-content">
            <article>
                <h3>Name: ${firstName} ${lastName}</h3>
                <p>From date: ${fromDate}</p>
                <p>To date: ${toDate}</p>
            </article>
            <button class="confirm-btn">Confirm</button>
            <button class="cancel-btn">Cancel</button>
        </li>
        `;

      confirmRef.innerHTML = li;

      const confirmBtn = document.querySelector(".confirm-btn");
      const cancelBtn = document.querySelector(".cancel-btn");

      confirmBtn.addEventListener("click", () => {
        confirmRef.innerHTML = "";
        nextBtnRef.disabled = false;
        okRef.innerHTML = '<h1 id="status"></h1>';

        const h1 = okRef.querySelector("h1");
        h1.textContent = "Vacation Requested";
        h1.classList.add("vacation-confirmed");

        h1.addEventListener("click", () => {
          window.location.reload();
        });
      });

      cancelBtn.addEventListener("click", () => {
        confirmRef.innerHTML = "";
        nextBtnRef.disabled = false;
        okRef.innerHTML = '<h1 id="status"></h1>';

        const h1 = okRef.querySelector("h1");
        h1.textContent = "Cancelled Vacation";
        h1.classList.add("vacation-cancelled");

        h1.addEventListener("click", () => {
          window.location.reload();
        });
      });
    });
  }
}
