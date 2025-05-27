function validate() {
  const emailRef = document.getElementById("email");
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

  emailRef.addEventListener("change", () => {
    const email = emailRef.value;
    if (emailRegex.test(email)) {
      emailRef.classList.remove("error");
    } else {
      emailRef.classList.add("error");
    }
  });
}
