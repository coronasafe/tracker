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
    "occupation",
    "headOfHousehold",
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
    ("0" + new Date(date).getUTCMonth()).slice(-2) +
    "-" +
    ("0" + new Date(date).getDate()).slice(-2)
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

export function transformContactCreateRequest(inputRequest) {
  let outputRequest = {
    phone_number: inputRequest.phone,
    meta_info: {
      occupation: inputRequest.occupation.toUpperCase().replace(/ /g, "_").split("/")[0],
      head_of_household: inputRequest.headOfHousehold === "Yes",
    },
    contacted_patients: [{
      relation_with_patient: inputRequest.relationToPositivePatient.value,
      mode_of_contact: inputRequest.modeOfContact.value,
      date_of_first_contact: printDate(inputRequest.dateOfFirstContact),
      date_of_last_contact: printDate(inputRequest.dateOfLastContact),
      is_primary: inputRequest.typeOfContact === "Primary",
      condition_of_contact_is_symptomatic: inputRequest.symptoms.includes("Asymptomatic"),
      patient_in_contact: inputRequest.covidPatientCode.value.patient_id
    }],
    name: inputRequest.name,
    gender: genderMap[inputRequest.gender],
    address: inputRequest.address,
    date_of_birth: printDate(inputRequest.dob),
    estimated_contact_date: inputRequest.dateOfFirstContact,
    countries_travelled: inputRequest.countryOfVisit,
    past_travel: !!inputRequest.countryOfVisit,
    facility: inputRequest.nameOfHC.id,
    nearest_facility: inputRequest.nameOfHC.id,
    local_body: inputRequest.nameOfLSG.id,
    district: inputRequest.district.id,
    state: inputRequest.district.state,
    source: "COVID_TRACKER",
    contact_with_confirmed_carrier: inputRequest.typeOfContact === "Primary",
    contact_with_suspected_carrier: inputRequest.typeOfContact === "Secondary",
  };
  return outputRequest;
}
export function transformPassengerCreateRequest(inputRequest) {
  let outputRequest = {
    phone_number: inputRequest.phone,
    meta_info: {
      occupation: inputRequest.occupation.toUpperCase().replace(/ /g, "_").split("/")[0],
      head_of_household: inputRequest.headOfHousehold === "Yes",
    },
    name: inputRequest.name,
    gender: genderMap[inputRequest.gender],
    address: inputRequest.address,
    date_of_birth: printDate(inputRequest.dob),
    estimated_contact_date: inputRequest.dateOfFirstContact,
    countries_travelled: inputRequest.countryOfVisit,
    past_travel: !!inputRequest.countryOfVisit,
    date_of_return: inputRequest.dateOfDeparture,
    facility: inputRequest.nameOfHC.id,
    nearest_facility: inputRequest.nameOfHC.id,
    local_body: inputRequest.nameOfLSG.id,
    district: inputRequest.district.id,
    state: inputRequest.district.state,
    source: "COVID_TRACKER",
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
