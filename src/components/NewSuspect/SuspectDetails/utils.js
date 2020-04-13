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
function getFieldsString(fields) {
  let beginning = getLabelString(fields[0]);
  let middle = fields
    .slice(1, fields.length - 1)
    .reduce((fieldsString, field) => {
      return fieldsString + ", " + getLabelString(field);
    }, "");
  let end = getLabelString(fields[fields.length - 1]);

  if (fields.length == 1) {
    return beginning;
  } else if (fields.length == 2) {
    return beginning + " and " + end;
  } else {
    return beginning + middle + " and " + end;
  }
}

export function getErrorText(data) {
  let unfilledFields = getUnfilledFields(data);
  if (unfilledFields.length === 0) {
    return <div />;
  } else {
    return (
      <div className={"text-red-600"} width={3}>
        {getFieldsString(unfilledFields)}{" "}
        {unfilledFields.length === 1 ? "is" : "are"} not filled.
      </div>
    );
  }
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

const sampleInput = {
  name: "123",
  phone: "+919744859241",
  dateOfBirth: "1990-12-31T18:30:00.000Z",
  gender: "Male",
  typeOfLSG: "Municipality",
  occupation: "Student",
  headOfHousehold: "Yes",
  address: "asd",
  district: { id: 14, name: "Kasargode", state: 1 },
  nameOfLSG: {
    id: 979,
    name: "Balal  Grama Panchayat, Kasargode District",
    body_type: 1,
    localbody_code: "G140501",
    district: 14,
  },
  typeOfHC: "Educational Inst",
  type: "Passenger",
  nameOfHC: {
    id: 235,
    name: "Edu New",
    local_body: 341,
    district: 13,
    state: 1,
    facility_type: "Educational Inst",
    address: "New Edu Kannur",
    location: { latitude: 11.8762254, longitude: 75.3738043 },
    oxygen_capacity: 1234,
    phone_number: "+918798798798",
    local_body_object: {
      id: 341,
      name: "Chembilode  Grama Panchayat, Kannur District",
      body_type: 1,
      localbody_code: "G130605",
      district: 13,
    },
    district_object: { id: 13, name: "Kannur", state: 1 },
    state_object: { id: 1, name: "Kerala" },
    modified_date: "2020-04-11T21:48:25.153337+05:30",
    created_date: "2020-04-11T21:17:02.173062+05:30",
  },
  dateOfDeparture: "2020-04-10T18:30:00.000Z",
  dateOfReciept: "2020-04-08T18:30:00.000Z",
  countryOfVisit: "US",
  symptoms: ["Fever", "Breathlessness"],
  sampleSent: "Yes",
  lab: "Regional VRDL Thiruvananthapuram",
  labResult: "Negative",
  homeIsolation: "No",
  hospitalAdmission: "Yes",
  dateOfIsolation: "2020-04-21T18:30:00.000Z",
  remarks: "sdlfksndlknskdfgnsd",
};

export function transformPatientCreateRequest(inputRequest) {
  let outputRequest = {
    phone_number: inputRequest.phone,
    meta_info: {
      occupation: inputRequest.occupation.toUpperCase().replace(/ /g, "_").split("/")[0],
      head_of_household: inputRequest.headOfHousehold === "Yes",
    },
    contacted_patients: {
      relation_with_patient: inputRequest.relationToPositivePatient
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
