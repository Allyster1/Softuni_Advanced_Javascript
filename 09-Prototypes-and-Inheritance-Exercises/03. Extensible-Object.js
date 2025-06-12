function extendObject() {
  const parent = {};
  const child = Object.create(parent);

  child.extend = function (obj) {
    const objAsArr = Object.entries(obj);

    for (const [key, value] of objAsArr) {
      if (typeof value === "function") {
        parent[key] = value;
      } else {
        child[key] = value;
      }
    }
  };

  return child;
}

const template = {
  extendObject: function () {},
  extensionProperty: "Something",
};

const myObject = extendObject();
console.log(myObject);
