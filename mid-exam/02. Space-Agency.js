class SpaceAgency {
  constructor(agencyName, mission) {
    this.agencyName = agencyName;
    this.mission = mission;
    this.candidates = [];
  }

  acceptApplications(applications) {
    if (!Array.isArray(applications)) {
      return;
    }
    let addedCandidates = [];
    applications.forEach((app) => {
      let [name, education, flightHours] = app.split("-");
      flightHours = Number(flightHours);

      const personExists = this.candidates.findIndex(
        (person) => person[0] === name
      );

      if (personExists == -1) {
        this.candidates.push([name, education, flightHours]);
        addedCandidates.push(name);
      } else {
        const currentFlightHours = this.candidates[personExists][2];
        if (currentFlightHours < flightHours) {
          this.candidates[personExists][2] = flightHours;
        }
      }
    });

    return `You successfully added candidates: ${addedCandidates.join(", ")}.`;
  }

  chooseForMission(candidateInfo) {
    if (typeof candidateInfo !== "string") {
      return;
    }

    let [name, neededExperience] = candidateInfo.split("-");
    neededExperience = Number(neededExperience);

    const personFound = this.candidates.find((person) => person[0] === name);

    if (!personFound) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    const personFlightHours = personFound[2];

    if (personFlightHours < neededExperience) {
      throw new Error(
        `${name} does not have enough flight hours for the ${this.mission} mission, minimum required is ${neededExperience} hours.`
      );
    }

    personFound[2] = "selected";

    return `Congratulations, ${name} will participate in the ${this.mission} mission!`;
  }

  trainingBonus(name) {
    if (typeof name !== "string") {
      return;
    }

    const personFound = this.candidates.find((person) => person[0] === name);

    if (!personFound) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (personFound[1] === "Pilot") {
      return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $100,000!`;
    } else if (personFound[1] === "Engineer") {
      return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $120,000!`;
    } else {
      return `${name} will be trained by ${this.agencyName} as part of the ${this.mission} mission with a training bonus of $80,000!`;
    }
  }

  candidatesReport() {
    if (this.candidates.length === 0) {
      throw new Error("Candidate database is empty!");
    }

    const sorted = [...this.candidates].sort((a, b) =>
      a[0].localeCompare(b[0])
    );

    const report = sorted.map((person) => `${person[0]}-${person[2]}`);

    return `Candidates list:\n${report.join("\n")}`;
  }
}
