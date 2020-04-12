import React from "react";

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

const sampleInput = {
  type: "Suspect",
  covidPatientCode: "qwe",
  relationToPositivePatient: "Family Member",
  dateOfLastContact: "2020-04-09T18:30:00.000Z",
  modeOfContact:
    "3. Touched or cleaned the linens/clothes/or dishes of the patient",
  conditionOfContact: "Asymptomatic",
  sampleSent: "No",
  homeIsolation: "No",
  hospitalAdmission: "No",
  dateOfIsolation: "2020-04-30T18:30:00.000Z",
  remarks: "qwasdde",
};
const sampleOutput = {
  disease_status: "SUSPECTED", //MISSING
  source: "CARE", //MISSING
  medical_history: [{}], //MISSING
  nearest_facility_object: {
    //SAME AS HC?
  },
  contacted_patients: [{}], //MISSING
  nationality: "string", //Missing
  passport_no: "string", //Missing
  aadhar_no: "string", //Missing
  is_medical_worker: true, //Missing
  blood_group: "A+", //Missing
  estimated_contact_date: "2020-04-12T08:27:03Z", //FIeld?
  present_health: "string", //Field?
  ongoing_medication: "string", //Missing
  has_SARI: true, //Missing
  number_of_aged_dependents: -2147483648, //Missing
  number_of_chronic_diseased_dependents: -2147483648, //Missing
  is_active: true, //Missing
};
const genderMap = {
  Male: 1,
  Female: 2,
  Other: 3,
};
export function transformSubmitRequest(inputRequest) {
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
