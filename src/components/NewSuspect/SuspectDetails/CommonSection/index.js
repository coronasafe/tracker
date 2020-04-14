import React from "react";
import FormRow from "../../../common/FormRow";
import Labelled from "../../../common/Labelled";
import Dropdown, { MultiDropdown } from "../../../common/Dropdown";
import Textarea from "../../../common/Textarea";
import {
  HomeIsolationOptions,
  HospitalAdmissionOptions,
  SymptomOptions,
  LabOptions,
} from "./constants";
import { getSeverityOfContact } from "./utils";
import DatePicker from "../../../common/DatePicker";
import { getValidationError } from "../utils";

function CommonSection({ data, setData }) {
  return (
    <>
      <FormRow>
        <Labelled label="Symptoms">
          <MultiDropdown
            value={data["symptoms"]}
            setValue={setData("symptoms")}
            options={SymptomOptions}
          />
        </Labelled>
      </FormRow>
      <FormRow totalWidth={3}>
        <Labelled label="Sample Sent *"  errorMessage={getValidationError(data,"sampleSent")}>
          <Dropdown
            currentOption={data["sampleSent"]}
            setOption={setData("sampleSent")}
            options={["Yes", "No"]}
          />
        </Labelled>
        {data["sampleSent"] === "Yes" ? (
          <Labelled label="Lab">
            <Dropdown
              currentOption={data["lab"]}
              setOption={setData("lab")}
              options={LabOptions}
            />
          </Labelled>
        ) : (
          <div />
        )}

        {data["sampleSent"] === "Yes" ? (
          <Labelled label="Lab Result">
            <Dropdown
              currentOption={data["labResult"]}
              setOption={setData("labResult")}
              options={["Positive", "Negative", "Awaiting", "Invalid"]}
            />
          </Labelled>
        ) : (
          <div />
        )}
      </FormRow>
      <FormRow totalWidth={3}>
        <Labelled label="Severity of Contact">
          {getSeverityOfContact(data)}
        </Labelled>
        <Labelled label="Type of Contact">
          <Dropdown options={[]} />
        </Labelled>
      </FormRow>
      <FormRow>
        <Labelled label="Home Isolation *" errorMessage={getValidationError(data,"homeIsolation")}>
          <Dropdown
            currentOption={data["homeIsolation"]}
            setOption={setData("homeIsolation")}
            options={HomeIsolationOptions}
          />
        </Labelled>
        <Labelled label="Hospital Admission *" errorMessage={getValidationError(data,"hospitalAdmission")}>
          <Dropdown
            currentOption={data["hospitalAdmission"]}
            setOption={setData("hospitalAdmission")}
            options={HospitalAdmissionOptions}
          />
        </Labelled>
        <Labelled label="Date of isolation">
          <DatePicker
            value={data["dateOfIsolation"]}
            onChange={setData("dateOfIsolation")}
          />
        </Labelled>
      </FormRow>
      <FormRow>
        <Labelled label="Remarks">
          <Textarea value={data["remakrs"]} onChange={setData("remarks")} />
        </Labelled>
      </FormRow>
    </>
  );
}

export default CommonSection;
