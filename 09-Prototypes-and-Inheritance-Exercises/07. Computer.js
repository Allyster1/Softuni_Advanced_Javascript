function createComputerHierarchy() {
  class Computer {
    constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
      if (new.target === Computer) {
        throw new Error("Incorrect inheritance");
      }
      this.manufacturer = manufacturer;
      this.processorSpeed = processorSpeed;
      this.ram = ram;
      this.hardDiskSpace = hardDiskSpace;
    }
  }

  class Keyboard {
    constructor(manufacturer, responseTime) {
      this.manufacturer = manufacturer;
      this.responseTime = responseTime;
    }
  }

  class Monitor {
    constructor(manufacturer, width, height) {
      this.manufacturer = manufacturer;
      this.width = width;
      this.height = height;
    }
  }

  class Battery {
    constructor(manufacturer, expectedLife) {
      this.manufacturer = manufacturer;
      this.expectedLife = expectedLife;
    }
  }

  class Laptop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      weight,
      color,
      battery
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this.weight = weight;
      this.color = color;
      this._battery = null;
      if (battery) {
        this.battery = battery;
      }
    }

    get battery() {
      return this._battery;
    }

    set battery(newBattery) {
      if (!(newBattery instanceof Battery)) {
        throw new TypeError(
          "Battery must be an instance of the Battery class!"
        );
      }
      this._battery = newBattery;
    }
  }

  class Desktop extends Computer {
    constructor(
      manufacturer,
      processorSpeed,
      ram,
      hardDiskSpace,
      keyboard,
      monitor
    ) {
      super(manufacturer, processorSpeed, ram, hardDiskSpace);
      this._keyboard = null;
      this._monitor = null;
      if (keyboard) {
        this.keyboard = keyboard;
      }
      if (monitor) {
        this.monitor = monitor;
      }
    }

    get keyboard() {
      return this._keyboard;
    }

    set keyboard(newKeyboard) {
      if (!(newKeyboard instanceof Keyboard)) {
        throw new TypeError(
          "Keyboard must be an instance of the Keyboard class!"
        );
      }
      this._keyboard = newKeyboard;
    }

    get monitor() {
      return this._monitor;
    }

    set monitor(newMonitor) {
      if (!(newMonitor instanceof Monitor)) {
        throw new TypeError(
          "Monitor must be an instance of the Monitor class!"
        );
      }
      this._monitor = newMonitor;
    }
  }

  return {
    Battery,
    Keyboard,
    Monitor,
    Computer,
    Laptop,
    Desktop,
  };
}

let classes = createComputerHierarchy();

let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;
let battery = new Battery("Energy", 3);

console.log(battery);

let laptop = new Laptop(
  "Hewlett Packard",
  2.4,
  4,
  0.5,
  3.12,
  "Silver",
  battery
);
console.log(laptop);
