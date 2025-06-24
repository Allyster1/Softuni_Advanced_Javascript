import { medicalCheckup } from "../medicalCheckup.js";
import { expect } from "chai";

describe("Tests for medicalCheckup Module", () => {
  describe("Method scheduleAppointment tests", () => {
    //patientsCount - number, costPerPatient - number, clinicLocation - string
    it("error 'Invalid Information!' for invalid patientsCount", () => {
      expect(() =>
        medicalCheckup.scheduleAppointment(5, "5", "Sofia")
      ).to.throw("Invalid Information!");
    });
    it("error 'Invalid Information!' for invalid costPerPatient", () => {
      expect(() =>
        medicalCheckup.scheduleAppointment("Test", 5, "Sofia")
      ).to.throw("Invalid Information!");
    });
    it("error 'Invalid Information!' for invalid clinicLocation", () => {
      expect(() => medicalCheckup.scheduleAppointment(5, 5, 100)).to.throw(
        "Invalid Information!"
      );
    });
    it("error 'Invalid Information!' for invalid details", () => {
      expect(() =>
        medicalCheckup.scheduleAppointment("Hello", "Softuni", 150)
      ).to.throw("Invalid Information!");
    });
    it("error if location is not Sofia", () => {
      expect(() =>
        medicalCheckup.scheduleAppointment(10, 15, "Madan")
      ).to.throw("The location of this clinic is not in the correct city!");
    });
    it("return meet the requirements", () => {
      const patientsCount = 40;
      const costPerPatient = 45;
      const result = medicalCheckup.scheduleAppointment(
        patientsCount,
        costPerPatient,
        "Sofia"
      );
      expect(result).to.equal(
        `This clinic meets the requirements, with capacity for ${patientsCount} patients at ${costPerPatient}$ per checkup.`
      );
    });
    it("returns does not meet the requirements", () => {
      const patientsCount = 15;
      const costPerPatient = 51;
      const result = medicalCheckup.scheduleAppointment(
        patientsCount,
        costPerPatient,
        "Sofia"
      );
      expect(result).to.equal(`This clinic does not meet your requirements!`);
    });
  });

  describe("Method additionalServices tests", () => {
    //additionalServices(labTests, consultations, hasInsurance) - array, array, and boolean.
    it("error 'Invalid Information' for invalid labTests", () => {
      expect(() =>
        medicalCheckup.additionalServices("iphone", ["general"], false)
      ).to.throw("Invalid Information!");
    });
    it("error 'Invalid Information' for invalid consultations", () => {
      expect(() =>
        medicalCheckup.additionalServices(["blood"], "blooooood", false)
      ).to.throw("Invalid Information!");
    });
    it("error 'Invalid Information' for invalid hasInsurance", () => {
      expect(() =>
        medicalCheckup.additionalServices(["blood"], ["general"], "test")
      ).to.throw("Invalid Information!");
    });
    it("error 'Invalid Information' for invalid details", () => {
      expect(() =>
        medicalCheckup.additionalServices("blood", "general", "test")
      ).to.throw("Invalid Information!");
    });
    it("return 0 for empty arrays", () => {
      const result = medicalCheckup.additionalServices([], [], false);
      expect(result).to.equal(`You spend 0$ for lab tests and consultations!`);
    });
    it("return 0 with discount for empty arrays and boolean set to true", () => {
      const result = medicalCheckup.additionalServices([], [], true);
      expect(result).to.equal(
        `You spend 0$ for lab tests and consultations with 20% insurance discount!`
      );
    });
    it("return valid input with no discount", () => {
      const result = medicalCheckup.additionalServices(
        ["blood", "urine", "blood"],
        ["general", "specialist"],
        false
      );
      expect(result).to.equal(
        `You spend 355$ for lab tests and consultations!`
      );
    });
    it("return valid input with a discount", () => {
      const result = medicalCheckup.additionalServices(
        ["blood", "urine"],
        ["general", "specialist"],
        true
      );
      expect(result).to.equal(
        `You spend 268$ for lab tests and consultations with 20% insurance discount!`
      );
    });
  });

  describe("Method roomDistribution tests", () => {
    // roomDistribution(patients, rooms)
    it("error 'Invalid Information' for invalid patients", () => {
      expect(() => medicalCheckup.roomDistribution(-5, 1)).to.throw(
        "Invalid Information!"
      );
    });
    it("error 'Invalid Information' for invalid rooms", () => {
      expect(() => medicalCheckup.roomDistribution(1, 0)).to.throw(
        "Invalid Information!"
      );
    });
    it("error 'Invalid Information' for invalid details", () => {
      expect(() =>
        medicalCheckup.roomDistribution("Hello", "Testing Stuff")
      ).to.throw("Invalid Information!");
    });
    it("return consider rearanging", () => {
      const patients = 5;
      const rooms = 3;
      const result = medicalCheckup.roomDistribution(patients, rooms);
      let patientsPerRoom = Math.round(patients / rooms);
      expect(result).to.equal(
        `There is only ${patientsPerRoom} patient in every room, consider rearranging.`
      );
    });
    it("return result with valid inputs", () => {
      const patients = 100;
      const rooms = 10;
      let patientsPerRoom = Math.round(patients / rooms);
      const result = medicalCheckup.roomDistribution(patients, rooms);
      expect(result).to.equal(
        `You have ${rooms} rooms with ${patientsPerRoom} patients in each room.`
      );
    });
  });
});
