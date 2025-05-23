function editElement(ref, text, replacer) {
  const content = ref.textContent;
  const replacedText = content.split(text).join(replacer);
  ref.textContent = replacedText;
}
