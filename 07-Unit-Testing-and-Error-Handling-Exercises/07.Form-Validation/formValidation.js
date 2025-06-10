function validate() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");

  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");

  const companyCheck = document.getElementById("company");
  const companyInfo = document.getElementById("companyInfo");
  const companyNumber = document.getElementById("companyNumber");

  const validDiv = document.getElementById("valid");
  const submitBtn = document.getElementById("submit");

  const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
  const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
  const passwordPattern = /^\w{5,15}$/;

  companyCheck.addEventListener("change", () => {
    if (companyCheck.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
      companyNumber.style.borderColor = "";
    }
  });

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let isValid = true;

    if (!usernamePattern.test(username.value)) {
      username.style.borderColor = "red";
      isValid = false;
    } else {
      username.style.borderColor = "";
    }

    if (!emailPattern.test(email.value)) {
      email.style.borderColor = "red";
      isValid = false;
    } else {
      email.style.borderColor = "";
    }

    if (!passwordPattern.test(password.value)) {
      password.style.borderColor = "red";
      isValid = false;
    } else {
      password.style.borderColor = "";
    }

    if (
      !passwordPattern.test(confirmPassword.value) ||
      confirmPassword.value !== password.value
    ) {
      confirmPassword.style.borderColor = "red";
      isValid = false;
    } else {
      confirmPassword.style.borderColor = "";
    }

    if (companyCheck.checked) {
      const companyNumValue = Number(companyNumber.value);
      if (
        !companyNumber.value ||
        isNaN(companyNumValue) ||
        companyNumValue < 1000 ||
        companyNumValue > 9999
      ) {
        companyNumber.style.borderColor = "red";
        isValid = false;
      } else {
        companyNumber.style.borderColor = "";
      }
    }

    if (isValid) {
      validDiv.style.display = "block";
    } else {
      validDiv.style.display = "none";
    }
  });
}
