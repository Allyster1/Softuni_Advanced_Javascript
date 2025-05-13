function timeToWalk(steps, footprintM, speedKmh) {
  const distance = steps * footprintM;
  const breaks = Math.floor(distance / 500);
  const speedMs = (speedKmh * 1000) / 3600;

  const walkingTimeSec = distance / speedMs;
  const totalSec = walkingTimeSec + breaks * 60;

  const hours = Math.floor(totalSec / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = Math.round(totalSec % 60);

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  console.log(`${hh}:${mm}:${ss}`);
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
