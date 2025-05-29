function lockedProfile() {
  const profilesInfo = Array.from(document.querySelectorAll(".profile"));

  for (const profile of profilesInfo) {
    const [lock, unlock] = profile.querySelectorAll('input[type="radio"]');

    const button = profile.querySelector("button");
    const hiddenInfo = profile.querySelector("div");

    button.addEventListener("click", () => {
      if (unlock.checked) {
        if (hiddenInfo.style.display === "inline-block") {
          hiddenInfo.style.display = "none";
          button.textContent = "Show more";
        } else {
          hiddenInfo.style.display = "inline-block";
          button.textContent = "Hide it";
        }
      }
    });
  }
}
