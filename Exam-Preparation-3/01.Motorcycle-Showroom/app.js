window.addEventListener("load", solve);

function solve() {
  const previewRef = document.getElementById("preview-list");
  const completeRef = document.getElementById("complete-list");
  const dataViewUI = document.querySelector(".data-view");

  const colorRef = document.getElementById("colors");
  const motorRef = document.getElementById("motorcycles");
  const dateTimeRef = document.getElementById("datetime");
  const fullNameRef = document.getElementById("full-name");
  const emailRef = document.getElementById("email");

  const testBtn = document.getElementById("test-ride-btn");

  testBtn.addEventListener("click", onClick);

  function clearContent() {
    colorRef.selectedIndex = 0;
    motorRef.selectedIndex = 0;
    dateTimeRef.value = "";
    fullNameRef.value = "";
    emailRef.value = "";
  }

  function onClick() {
    const color = colorRef.value;
    const motor = motorRef.value;
    const datetime = dateTimeRef.value;
    const fullName = fullNameRef.value;
    const email = emailRef.value;

    if (color === "" || motor === "" || !datetime || !fullName || !email) {
      return;
    }

    const content = `
    <li>
      <article>
        <p>Color: ${color}</p>
        <p>Model: ${motor}</p>
        <p>For: ${fullName}</p>
        <p>Contact: ${email}</p>
        <p>Test Ride On: ${datetime}</p>
      </article>
    </li>
    <div class="btn-container">
        <button class="edit-btn">Edit</button>
        <button class="next-btn">Next</button>
    </div>
    `;

    clearContent();

    previewRef.innerHTML = content;
    testBtn.disabled = true;

    const editBtn = document.querySelector(".edit-btn");
    const nextBtn = document.querySelector(".next-btn");

    editBtn.addEventListener("click", () => {
      testBtn.disabled = false;

      colorRef.value = color;
      motorRef.value = motor;
      dateTimeRef.value = datetime;
      fullNameRef.value = fullName;
      emailRef.value = email;

      previewRef.innerHTML = "";
    });

    nextBtn.addEventListener("click", () => {
      previewRef.innerHTML = "";

      const completeContent = `
      <li>
        <article>
          <p>Color: ${color}</p>
          <p>Model: ${motor}</p>
          <p>For: ${fullName}</p>
          <p>Contact: ${email}</p>
          <p>Test Ride On: ${datetime}</p>
          <button class="complete-btn">Complete</button>
        </article>
      </li>
    `;
      completeRef.innerHTML = completeContent;

      const completeBtn = document.querySelector(".complete-btn");

      completeBtn.addEventListener("click", () => {
        completeRef.innerHTML = "";

        const confirmBtn = document.createElement("button");
        confirmBtn.classList = "confirm-btn";
        confirmBtn.textContent = "Your Test Ride is Confirmed";

        dataViewUI.appendChild(confirmBtn);

        confirmBtn.addEventListener("click", () => {
          window.location.reload();
        });
      });
    });
  }
}
