function hydrateWorker(workerData) {
  let worker = {
    ...workerData,
    levelOfHydrated: workerData.dizziness
      ? workerData.weight * 0.1 * workerData.experience
      : workerData.levelOfHydrated,
    dizziness: false,
  };

  return worker;
}

hydrateWorker({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
