(function stringExtension() {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    }
    return this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    }
    return this.toString();
  };

  String.prototype.isEmpty = function () {
    return !this.toString();
  };

  String.prototype.truncate = function (n) {
    if (n < 4) {
      return ".".repeat(n);
    } else if (this.length <= n) {
      return this.toString();
    } else if (this.includes(" ")) {
      let words = this.split(" ");
      let result = [];

      for (let word of words) {
        let current = result.join(" ") + word;
        if (current.length + 3 <= n) {
          result.push(word);
        } else {
          break;
        }
      }
      return result.join(" ") + "...";
    }
    return this.slice(0, n - 3) + "...";
  };

  String.format = function (string, ...params) {
    for (let i = 0; i < params.length; i++) {
      let currentWord = params[i];
      string = string.replace(`{${i}}`, currentWord);
    }
    return string;
  };
})();

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
