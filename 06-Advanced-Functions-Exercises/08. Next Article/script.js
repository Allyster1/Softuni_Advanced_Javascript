function getArticleGenerator(arrayInput) {
  const contentRef = document.getElementById("content");
  const counterLimit = arrayInput.length;
  let counter = 0;

  return showNext;

  function showNext() {
    if (counter >= counterLimit) {
      return;
    }
    createArticle(arrayInput[counter]);
    counter += 1;
  }

  function createArticle() {
    const article = document.createElement("article");
    const p = document.createElement("p");
    p.textContent = arrayInput[counter];

    article.appendChild(p);
    contentRef.appendChild(article);
  }
}
