function createAssemblyLine() {
  const carData = {
    hasClima(car) {
      car.temp = 21;
      car.tempSettings = 21;
      car.adjustTemp = function adjustTemp() {
        if (this.temp < this.tempSettings) {
          this.temp += 1;
        } else if (this.temp > this.tempSettings) {
          this.temp -= 1;
        }
      };
    },
    hasAudio(car) {
      car.currentTrack = null;
      car.nowPlaying = function nowPlaying() {
        if (this.currentTrack !== null) {
          console.log(
            `Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`
          );
        }
      };
    },
    hasParktronic(car) {
      car.checkDistance = function checkDistance(distance) {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (0.1 <= distance && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (0.25 <= distance && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };

  return carData;
}

const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

// hasClima
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

// hasAudio
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying();

//hasParktronic
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);
