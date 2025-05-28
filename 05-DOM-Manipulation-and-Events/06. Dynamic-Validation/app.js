function validate() {
  const emailRef = document.getElementById("email");
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  emailRef.addEventListener("change", () => {
    if (pattern.test(emailRef.value)) {
      emailRef.classList.remove("error");
    } else {
      emailRef.classList.add("error");
    }
  });
}
