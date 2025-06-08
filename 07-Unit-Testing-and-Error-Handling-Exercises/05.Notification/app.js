function notify(message) {
  const notification = document.getElementById("notification");

  console.log("clicked");

  if (notification.style.display === "block") {
    notification.style.display = "none";
  } else {
    notification.textContent = message;
    notification.style.display = "block";

    notification.onclick = () => {
      notification.style.display = "none";
    };
  }
}
