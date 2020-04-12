import { APIRequest } from "../../../Redux/fireRequest";
import { searchStringMatch } from "./utils";

const districts = ["Ernakulam", "Calicut", "Trivandrum", "Kollam", "Kannur"];

export function getDistrictOptions(searchText) {
  return APIRequest("getDistrictsList").then((response) => {
    return response.data.results;
  });
}

export function getLSGNameOptions(type, district) {
  return APIRequest("getDistrictsList", [district.id, "local_bodies"]).then(
    (response) => {
      return response.data.filter((lsg) => {
        return searchStringMatch(lsg.name, type);
      });
    }
  );
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
