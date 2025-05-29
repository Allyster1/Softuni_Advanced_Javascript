function encodeAndDecodeMessages() {
  const [encodeBtn, decodeBtn] = document.querySelectorAll("button");
  const [encodeText, decodeText] = document.querySelectorAll("textarea");

  encodeBtn.addEventListener("click", () => {
    const text = encodeText.value;
    if (!text) return;

    let encodedMsg = "";
    text.split("").forEach((char) => {
      encodedMsg += String.fromCharCode(char.charCodeAt(0) + 1);
    });

    decodeText.value = encodedMsg;
    encodeText.value = "";

    decodeBtn.disabled = false;
  });

  decodeBtn.addEventListener("click", () => {
    const text = decodeText.value;
    if (!text) return;

    let decodedMsg = "";
    text.split("").forEach((char) => {
      decodedMsg += String.fromCharCode(char.charCodeAt(0) - 1);
    });

    decodeText.value = decodedMsg;

    decodeBtn.disabled = true;
  });
}
