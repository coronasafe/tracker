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

export function printDate(date){
  return new Date(date).getDate()+"-"+new Date(date).getUTCMonth()+"-"+new Date(date).getFullYear();
}

export function searchStringMatch(compareString,searchString){
  let a=compareString.toUpperCase();
  let b=searchString.toUpperCase();
  return a.includes(b);
}