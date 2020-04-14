import React from "react";
import FormRow from "../../../common/FormRow";
import Labelled from "../../../common/Labelled";
import Dropdown, {AsyncDropdown} from "../../../common/Dropdown";
import {
  relationToPositivePatientOptions,
  modeOfContactOptions,
} from "./constants";

import {
  getCovidPatients
} from "../service";
import CommonSection from "../CommonSection";
import DatePicker from "../../../common/DatePicker";

function ContactForm({ data, setData }) {
  return (
    <>
      <FormRow>
        <Labelled label="Covid Patient Code *">
          <AsyncDropdown
            loadOptionsService={getCovidPatients}
            setOption={setData("covidPatientCode")}
          />
        </Labelled>
        <Labelled label="Relation to identified-positive-patient">
          <Dropdown
            currentOption={data["relationToPositivePatient"]}
            setOption={setData("relationToPositivePatient")}
            options={relationToPositivePatientOptions}
          />
        </Labelled>
      </FormRow>
      <FormRow>
        <Labelled label="Date of First Contact">
          <DatePicker
            onChange={setData("dateOfFirstContact")}
            value={data["dateOfFirstContact"]}
          />
        </Labelled>
        <Labelled label="Date of Last Contact">
          <DatePicker
            onChange={setData("dateOfLastContact")}
            value={data["dateOfLastContact"]}
          />
        </Labelled>
        <Labelled label="Primary/Secondary">
          <Dropdown
            currentOption={data["typeOfContact"]}
            setOption={setData("typeOfContact")}
            options={["Primary", "Secondary"]}
          />
        </Labelled>
      </FormRow>
      <FormRow>
        <Labelled label="Mode of Contact">
          <Dropdown
            currentOption={data["modeOfContact"]}
            setOption={setData("modeOfContact")}
            options={modeOfContactOptions}
          />
        </Labelled>
      </FormRow>
      <CommonSection data={data} setData={setData} />
    </>
  );
}
export default ContactForm;
