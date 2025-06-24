window.addEventListener("load", solve);

function solve() {
  const orderUI = document.querySelector(".order-info-list");
  const confirmUI = document.querySelector(".confirm-order-list");
  const statusUI = document.getElementById("status");

  const pickupRef = document.getElementById("pick-up-location");
  const dropRef = document.getElementById("drop-off-location");
  const numberOfPeopleRef = document.getElementById("number-of-passengers");
  const timeRef = document.getElementById("date-time");
  const taxiTypeRef = document.getElementById("taxi-type");

  const orderBtn = document.getElementById("order-btn");
  orderBtn.addEventListener("click", orderTaxi);

  function clearHTML() {
    pickupRef.value = "";
    dropRef.value = "";
    numberOfPeopleRef.value = "";
    timeRef.value = "";
    taxiTypeRef.selectedIndex = 0;
  }

  function orderTaxi(event) {
    event.preventDefault();
    const pickup = pickupRef.value;
    const drop = dropRef.value;
    const numberOfPeople = numberOfPeopleRef.value;
    const time = timeRef.value;
    const taxiType = taxiTypeRef.value;

    if (
      pickup === "" ||
      drop === "" ||
      numberOfPeople === "" ||
      !time ||
      numberOfPeople === "0" ||
      taxiType === ""
    ) {
      return;
    }

    orderBtn.disabled = true;
    clearHTML();

    const content = `
    <li class="order-content">
        <article>
            <h3>Pick from: ${pickup}</h3>
            <h3>Drop-off: ${drop}</h3>
            <p>Passengers: ${numberOfPeople}</p>
            <p>Time: ${time}</p>
            <p>Type: ${taxiType}</p>
        </article>
        <div class="btn-wrapper">
            <button class="edit-btn">Edit</button>
            <button class="continue-btn">Continue</button>
        </div>
    </li>
    `;

    orderUI.innerHTML = content;

    const editBtn = document.querySelector(".edit-btn");
    const continueBtn = document.querySelector(".continue-btn");

    editBtn.addEventListener("click", () => {
      orderBtn.disabled = false;

      pickupRef.value = pickup;
      dropRef.value = drop;
      numberOfPeopleRef.value = numberOfPeople;
      timeRef.value = time;
      taxiTypeRef.value = taxiType;

      orderUI.innerHTML = "";
    });

    continueBtn.addEventListener("click", () => {
      const continueContent = `
        <li class="order-content">
            <article>
                <h3>Pick from: ${pickup}</h3>
                <h3>Drop-off: ${drop}</h3>
                <p>Passengers: ${numberOfPeople}</p>
                <p>Time: ${time}</p>
                <p>Type: ${taxiType}</p>
            </article>
            <div class="btn-wrapper">
                <button class="cancel-btn">Cancel</button>
                <button class="confirm-btn">Confirm</button>
            </div>
        </li>
    `;

      confirmUI.innerHTML = continueContent;
      orderUI.innerHTML = "";

      const cancelBtn = document.querySelector(".cancel-btn");
      const confirmBtn = document.querySelector(".confirm-btn");

      confirmBtn.addEventListener("click", () => {
        orderBtn.disabled = false;
        confirmUI.innerHTML = "";

        statusUI.classList.add("taxi-ordered");
        statusUI.textContent = "Taxi has been successfully ordered.";

        statusUI.addEventListener("click", refreshScreen);
      });

      cancelBtn.addEventListener("click", () => {
        orderBtn.disabled = false;
        confirmUI.innerHTML = "";

        statusUI.classList.add("taxi-not-complete");
        statusUI.textContent = "Taxi request was not completed.";

        statusUI.addEventListener("click", refreshScreen);
      });
    });

    function refreshScreen() {
      window.location.reload();
    }
  }
}
