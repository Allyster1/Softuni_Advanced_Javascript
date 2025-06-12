function extendString() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    }
    return this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return str + this;
    }
    return this.toString;
  };

  String.prototype.isEmpty = function () {
    return !this.toString();
  };

  String.prototype.truncate = function (number) {
    if (number < 4) {
      return ".".repeat(number);
    } else if (this.length <= number) {
      return this.toString();
    } else if (this.includes("")) {
      const words = this.split(" ");
      let result = [];

      for (const word of words) {
        const currentStr = result.join(" ") + word;
        if (currentStr.length + 3 <= number) {
          result.push(word);
        } else {
          break;
        }
      }

      return result.join(" ") + "...";
    }
    return this.splice(0, number - 3) + "...";
  };

  String.format = function (string, ...params) {
    for (let i = 0; i < params.length; i++) {
      let currentWord = params[i];
      string = string.replace(`${i}`, currentWord);
    }
    return string;
  };
}
extendString();

let str = "my string";
str = str.ensureStart("my");
str = str.ensureStart("hello ");
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format("The {0} {1} fox", "quick", "brown");
str = String.format("jumps {0} {1}", "dog");
