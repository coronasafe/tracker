import { modeOfContactOptions } from "../ContactForm/constants";

export function getSeverityOfContact(formData) {
  if (!formData["modeOfContact"]) {
    return "Mode of Contact not selected";
  }
  let searchIndex = 0;
  modeOfContactOptions.find((option, index) => {
    searchIndex = index;
    return option === formData["modeOfContact"];
  });
  if (searchIndex <= 5) {
    return "High Risk";
  } else {
    return "Low Risk";
  }
}
