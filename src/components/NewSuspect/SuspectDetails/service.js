import { APIRequest } from "../../../Redux/fireRequest";
import {
  searchStringMatch,
  transformPatientCreateRequest,
  transformConsultationCreateRequest,
  transformTestSampleCreateRequest,
} from "./utils";

export function getDistrictOptions(searchText) {
  return APIRequest("getDistrictsList", [""]).then((response) => {
    if (response && response.data && response.data.results) {
      return response.data.results;
    } else {
      return [];
    }
  });
}

export function getLSGNameOptions(type, district) {
  return APIRequest("getDistrictsList", [district.id, "local_bodies"]).then(
    (response) => {
      if (response && response.data) {
        return response.data.filter((lsg) => {
          return searchStringMatch(lsg.name, type);
        });
      } else {
        return [];
      }
    }
  );
}

export function getHCNameOptions(lsg, type) {
  return APIRequest("getFacilitiesList", [""], {
    // local_body:lsg.id,
  }).then((response) => {
    if (response && response.data && response.data.results) {
      return response.data.results.filter((hc) => {
        return hc.facility_type === type;
      });
    } else {
      return [];
    }
  });
}

export async function saveForm(formData) {
  try {
    let createPatientRequest = transformPatientCreateRequest(formData);
    let createPatientResponse = await APIRequest(
      "createPatient",
      [],
      createPatientRequest
    );
    let patientId = createPatientResponse.data.id;
    let createConsultationRequest = transformConsultationCreateRequest(
      formData,
      patientId
    );
    let createConsultationResponse = await APIRequest(
      "createConsultation",
      [],
      createConsultationRequest
    );
    if (formData["sampleSent"] && formData["sampleSent"] === "Yes") {
      let consultationId = createConsultationResponse.data.id;
      let createTestSampleRequest = transformTestSampleCreateRequest(
        formData,
        patientId,
        consultationId
      );
      await APIRequest(
        "createPatient",
        [patientId, "test_sample"],
        createTestSampleRequest
      );
    }
  } catch (e) {
    throw e;
  }
}
