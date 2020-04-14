import React from "react";
import { SymptomOptions } from "./CommonSection/constants";

function getLabelString(field) {
  let labelString = field
    .split("")
    .slice(1)
    .reduce((accumulated, letter, index) => {
      if (index === 0) {
        if (letter.toUpperCase() === letter) {
          return accumulated + " " + letter;
        } else {
          return accumulated + letter;
        }
      }
      let previousLetter = field[index];
      if (
        letter.toUpperCase() === letter &&
        previousLetter.toUpperCase() !== previousLetter
      ) {
        return accumulated + " " + letter;
      } else {
        return accumulated + letter;
      }
    }, field[0].toUpperCase());
  return labelString;
}

export function getUnfilledFields(data) {
  let requiredFields = [
    "address",
    "district",
    "typeOfLSG",
    "nameOfLSG",
    "nameOfHC",
    "sampleSent",
    "homeIsolation",
    "hospitalAdmission",
  ];
  if (data["type"] !== "Passenger") {
    requiredFields.push("covidPatientCode");
  }
  let missingFields = requiredFields.filter((field) => !data[field]);
  return missingFields;
}

export function printDate(date) {
  return (
    new Date(date).getFullYear() +
    "-" +
    new Date(date).getUTCMonth() +
    "-" +
    new Date(date).getDate()
  );
}

export function searchStringMatch(compareString, searchString) {
  let a = compareString.toUpperCase();
  let b = searchString.toUpperCase();
  return a.includes(b);
}

export function getValidationError(form,field,optional = false){
  let value=form[field];
  //BASIC EMPTY VALIDATION
  if(!value && !optional){
    return getLabelString(field)+" cannot be empty";
  }
  switch(field){
    case "address": if(value.trim()===""){
      return "Address cannot be empty";
    }
  }
  return "";
}

const genderMap = {
  Male: 1,
  Female: 2,
  Other: 3,
};
const symptomsMap = (symptoms) => {
  return symptoms.map((symptom) => {
    return SymptomOptions.indexOf(symptom) + 1;
  });
};
export function transformPatientCreateRequest(inputRequest) {
  let outputRequest = {
    phone_number: inputRequest.phone,
    meta_info: {
      occupation: inputRequest.occupation.toUpperCase(),
      head_of_household: inputRequest.headOfHousehold === "Yes",
    },
    name: inputRequest.name,
    gender: genderMap[inputRequest.gender],
    address: inputRequest.address,
    date_of_birth: printDate(inputRequest.dateOfBirth),
    estimated_contact_date: inputRequest.dateOfFirstContact,
    countries_travelled: inputRequest.countryOfVisit,
    past_travel: !!inputRequest.countryOfVisit,
    date_of_return: inputRequest.dateOfDeparture,
    facility: inputRequest.nameOfHC.id,
    nearest_facility: inputRequest.nameOfHC.id,
    local_body: inputRequest.nameOfLSG.id,
    district: inputRequest.district.id,
    state: inputRequest.district.state,
    contact_with_confirmed_carrier: inputRequest.typeOfContact === "Primary",
    contact_with_suspected_carrier: inputRequest.typeOfContact === "Secondary",
  };
  return outputRequest;
}

export function transformConsultationCreateRequest(inputRequest, patientId) {
  return {
    symptoms: symptomsMap(inputRequest.symptoms),
    suggestion: inputRequest.homeIsolation === "Yes" ? "HI" : "-",
    patient: patientId,
    facility: inputRequest.nameOfHC.id,
    admitted: inputRequest.hospitalAdmission === "Yes",
    admission_date: new Date(inputRequest.dateOfIsolation).toISOString(),
  };
}

export function transformTestSampleCreateRequest(
  inputRequest,
  patientId,
  consultationId
) {
  return {
    facility_object: {
      name: inputRequest.lab,
    },
    result: inputRequest.labResult.toUpperCase(),
    patient: patientId,
    consultation: consultationId,
    has_sari: inputRequest.symptoms.includes("SARI"),
  };
}
