import React from "react";
import FormRow from "../../../common/FormRow";
import Labelled from "../../../common/Labelled";
import Input from "../../../common/Input";
import Dropdown from "../../../common/Dropdown";
import {
  relationToPositivePatientOptions,
  modeOfContactOptions,
} from "./constants";
import CommonSection from "../CommonSection";

function ContactForm({ data, setData }) {
  return (
    <>
      <FormRow>
        <Labelled label="Covid Patient Code">
          <Input
            value={data["covidPatientCode"]}
            onChange={setData("covidPatientCode")}
            helpText="(Identified Positive Case)"
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
          <Dropdown options={[]} />
        </Labelled>
        <Labelled label="Date of Last Contact">
          <Dropdown options={[]} />
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
      <CommonSection data={data} setData={setData}/>
    </>
  );
}
export default ContactForm;
