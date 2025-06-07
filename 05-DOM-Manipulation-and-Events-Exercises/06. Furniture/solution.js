class FurnitureItem {
  element;
  record;
  _checkbox;

  get checked() {
    return this._checkbox.checked;
  }

  constructor(record) {
    this.record = record;

    this.init();
  }

  init() {
    this._checkbox = html("input", { type: "checkbox" });

    this.element = html("tr", {}, [
      td([html("img", { src: this.record.img })]),
      td([html("p", {}, [this.record.name])]),
      td([html("p", {}, [this.record.price])]),
      td([html("p", {}, [this.record.decFactor])]),
      td([this._checkbox]),
    ]);
  }
}

function solve() {
  // parse input JSON

  // generate rows
  // - products rows keep record data and checkbox status

  // summarize purchase
  // - filter products for only the checked ones
  // - extract record data
  // - summarize

  const [input, output] = document.querySelectorAll("textarea");
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  const table = document.querySelector("tbody");

  const products = [];

  generateBtn.addEventListener("click", () => {
    const data = JSON.parse(input.value);

    for (let record of data) {
      const row = new FurnitureItem(record);
      table.appendChild(row.element);
      products.push(row);
    }
  });

  buyBtn.addEventListener("click", () => {
    const selected = products.filter((p) => p.checked).map((p) => p.record);

    const price = selected.reduce((a, c) => a + Number(c.price), 0);
    const decFactor = selected.reduce((a, c) => a + Number(c.decFactor), 0);

    const result = [
      `Bought furniture: ${selected.map((p) => p.name).join(", ")}`,
      `Total price: ${price.toFixed(2)}`,
      `Average decoration factor: ${decFactor / selected.length}`,
    ];

    output.value = result.join("\n");
  });
}

const td = (content) => html("td", {}, content);

function html(tagName, attr = {}, content = []) {
  const element = document.createElement(tagName);

  Object.assign(element, attr);

  for (let item of content) {
    if (typeof item != "object") {
      item = document.createTextNode(item);
    }

    element.appendChild(item);
  }

  return element;
}
