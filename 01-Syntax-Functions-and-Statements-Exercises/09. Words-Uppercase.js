function extractAndUppercase(text) {
  const words = text.match(/\b\w+\b/g);

  if (words) {
    const upperWords = words.map((word) => word.toUpperCase());
    console.log(upperWords.join(", "));
  } else {
    console.log("");
  }
}

extractAndUppercase("Hi, how are you?");
extractAndUppercase("hello");
