import { APIRequest } from "../../../Redux/fireRequest";
import {
  searchStringMatch,
  transformPassengerCreateRequest,
  transformContactCreateRequest,
  transformConsultationCreateRequest,
  transformTestSampleCreateRequest,
} from "./utils";
import { navigate } from "hookrouter";
export function getCovidPatients(searchText) {
  if(searchText.length === 0)
  return Promise.resolve('Success').then(()=>{ return [] })
  return APIRequest("searchPatient", [], {name: searchText}).then((response) => {
    if (response && response.data && response.data.results) {

      return response.data.results.map((patient)=>({name:`${patient.name} - ${patient.state_id} - ${patient.year_of_birth}`,value:patient}));
    } else {
      return [];
    }
  });


  // return [];
}

export function getDistrictOptions(searchText) {
  return APIRequest("getDistrictsList", [""]).then((response) => {
    if (response && response.data && response.data.results) {
      return response.data.results.filter((district) => {
        return searchStringMatch(district.name, searchText);
      });
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
    console.log(JSON.stringify(formData));
    let createPatientRequest = formData.type === "Passenger" ? transformPassengerCreateRequest(formData): transformContactCreateRequest(formData);
    console.log("Transformed");
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
    navigate("/suspect/"+patientId)
  } catch (e) {
    console.error(e)
    throw e;
  }
}
