import { APIRequest } from "../../../Redux/fireRequest";

const districts = ["Ernakulam", "Calicut", "Trivandrum", "Kollam", "Kannur"];

export function getDistrictOptions(searchText) {
  return APIRequest("getDistrictsList").then(response=>{
    return response.data.results;
  })
}

function getPanchayatOptions(searchText) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(districts);
    }, 1000);
  });
}
function getMuncipalityOptions(searchText) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(districts);
    }, 1000);
  });
}
function getCorporationOptions(searchText) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(districts);
    }, 1000);
  });
}

export function getLSGNameOptions(type) {
  switch (type) {
    case "Muncipality":
      return getMuncipalityOptions;
    case "Corporation":
      return getCorporationOptions;
    default:
        return getPanchayatOptions;
  }
}

export function getHCNameOptions(type) {
  return (searchText) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(districts);
      }, 1000);
    });
  };
}

export function saveForm(formData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(districts);
    }, 1000);
  });
}
