import React, { useState, useEffect } from "react";
import Labelled from "../../common/Labelled";
import Textarea from "../../common/Textarea";
import Dropdown, { AsyncDropdown } from "../../common/Dropdown";
import Input from "../../common/Input";
import FormRow from "../../common/FormRow";
import RadioSelect from "../../common/RadioSelect";
import PassengerForm from "./PassengerForm";
import ContactForm from "./ContactForm";
import {
  getDistrictOptions,
  getLSGNameOptions,
  getHCNameOptions,
  saveForm,
} from "./service";
import Button from "../../common/Button";
import { OccupationOptions, HealthCentreTypeOptions } from "./constants";
import { getUnfilledFields, getErrorText, printDate } from "./utils";
import { connect } from "react-redux";
import { setCurrentPatient } from "../../../Redux/actions";

import { navigate } from "hookrouter";
import { Success, Error } from "../../../util/Notifications";

function SuspectDetails({ formData, setFormData }) {
  useEffect(() => {
    if (!formData.typeOfLSG) {
      setFormData({
        ...formData,
        typeOfLSG: "Panchayat",
      });
    }
  }, []);

  if (!formData) {
    navigate("/");
    window.location.reload();
  }
  function setData(key) {
    return function (value) {
      setFormData({
        ...formData,
        [key]: value,
      });
    };
  }
  function submitForm() {
    saveForm(formData)
      .then(() => {
        Success("Form Successfully Saved");
      })
      .catch(() => {
        Error("Failed to create suspect");
      });
  }
  console.log("Form Data : ", formData);
  return (
    <div
      className="flex justify-center overflow-scroll min-h-screen"
      style={{ background: "#edf2f7" }}
    >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6 flex flex-col my-4 w-3/4 h-auto">
        <br />
        <FormRow bordered>
          <Labelled label="Name">{formData.name}</Labelled>
          <Labelled label="Date of birth">
            {printDate(formData.dateOfBirth)}
          </Labelled>
          <Labelled label="Gender">{formData.gender}</Labelled>
          <Labelled label="Phone Number">{formData.phone}</Labelled>
        </FormRow>

        <FormRow>
          <Labelled label="Occupation">
            <Dropdown
              options={OccupationOptions}
              currentOption={formData["occupation"]}
              setOption={setData("occupation")}
            />
          </Labelled>
          <Labelled label="Head of Household">
            <Input
              placeholder={"Head of Household"}
              value={formData["headOfHousehold"]}
              onChange={setData("headOfHousehold")}
            />
          </Labelled>
        </FormRow>

        <FormRow>
          <Labelled label="Address *">
            <Textarea
              value={formData["address"]}
              onChange={setData("address")}
            />
          </Labelled>
        </FormRow>

        <FormRow totalWidth={4}>
          <Labelled label="District *">
            <AsyncDropdown
              loadOptionsService={getDistrictOptions}
              setOption={setData("district")}
              labelKey={"name"}
            />
          </Labelled>
        </FormRow>

        <FormRow>
          <Labelled label="Type of LSG *">
            <Dropdown
              options={["Panchayat", "Muncipality", "Corporation"]}
              currentOption={formData["typeOfLSG"]}
              setOption={setData("typeOfLSG")}
            />
          </Labelled>
          <Labelled label={"Name of " + formData["typeOfLSG"] + " *"}>
            <AsyncDropdown
              setOption={setData("nameOfLSG")}
              loadOptionsService={getLSGNameOptions(formData["typeOfLSG"])}
            />
          </Labelled>
        </FormRow>

        <FormRow>
          <Labelled label="Type of Health institution">
            <Dropdown
              options={HealthCentreTypeOptions}
              currentOption={formData["typeOfHC"]}
              setOption={setData("typeOfHC")}
            />
          </Labelled>

          <Labelled label="Name of nearest PHC/FHC *">
            <AsyncDropdown
              setOption={setData("nameOfHC")}
              loadOptionsService={getHCNameOptions(formData["typeOfHC"])}
            />
          </Labelled>
        </FormRow>

        <FormRow>
          <Labelled label="Type *">
            <RadioSelect
              value={formData["type"]}
              setValue={setData("type")}
              options={["Passenger", "Contact", "Patient", "Suspect"]}
            />
          </Labelled>
        </FormRow>

        {formData["type"] &&
          (formData["type"] === "Passenger" ? (
            <PassengerForm data={formData} setData={setData} />
          ) : (
            <ContactForm data={formData} setData={setData} />
          ))}

        <FormRow>
          {getErrorText(formData)}
          <Button
            text={"Submit"}
            disabled={getUnfilledFields(formData).length !== 0}
            onClick={submitForm}
          />
        </FormRow>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    formData: state.currentPatient,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setFormData: (patientData) => {
      setCurrentPatient(patientData)(dispatch);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SuspectDetails);
