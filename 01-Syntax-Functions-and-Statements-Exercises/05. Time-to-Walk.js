function timeToWalk(steps, footprintM, speedKmh) {
  const distance = steps * footprintM;
  const breaks = Math.floor(distance / 500);
  const speedMs = (speedKmh * 1000) / 3600;

  const walkingTimeSec = distance / speedMs;
  const totalSec = walkingTimeSec + breaks * 60;

  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = Math.round(totalSec % 60);

  const hh = hours < 10 ? "0" + hours : "" + hours;
  const mm = minutes < 10 ? "0" + minutes : "" + minutes;
  const ss = seconds < 10 ? "0" + seconds : "" + seconds;

  console.log(`${hh}:${mm}:${ss}`);
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
