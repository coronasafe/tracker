import React from "react";
import FormRow from "../../../common/FormRow";
import Labelled from "../../../common/Labelled";
import Dropdown, { AsyncDropdown } from "../../../common/Dropdown";
import Textarea from "../../../common/Textarea";
import { HomeIsolationOptions, HospitalAdmissionOptions } from "./constants";
import { getSeverityOfContact } from "./utils";
import DatePicker from '../../../common/DatePicker';
import { getLabOptions } from "./service";

function CommonSection({ data, setData }) {
  return (
    <>
      <FormRow totalWidth={3}>
        <Labelled label="Condition of Contact">
          <Dropdown
            currentOption={data["conditionOfContact"]}
            setOption={setData("conditionOfContact")}
            options={["Symptomatic", "Asymptomatic"]}
          />
        </Labelled>
        {data["conditionOfContact"] === "Symptomatic" ? (
          <Labelled label="Symptoms">
            <Textarea value={data["symptoms"]} onChange={setData("symptoms")} />
          </Labelled>
        ) : (
          <div />
        )}
      </FormRow>
      <FormRow totalWidth={3}>
        <Labelled label="Sample Sent">
          <Dropdown
            currentOption={data["sampleSent"]}
            setOption={setData("sampleSent")}
            options={["Yes", "No"]}
          />
        </Labelled>
        {data["sampleSent"] === "Yes" ? (
          <Labelled label="Lab">
            <AsyncDropdown
              setOption={setData("lab")}
              loadOptionsService={getLabOptions}
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
              options={["Not Determined Yet", "Positive", "Negative"]}
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
        <Labelled label="Home Isolation">
          <Dropdown
            currentOption={data["homeIsolation"]}
            setOption={setData("homeIsolation")}
            options={HomeIsolationOptions}
          />
        </Labelled>
        <Labelled label="Hospital Admission">
          <Dropdown
            currentOption={data["hospitalAdmission"]}
            setOption={setData("hospitalAdmission")}
            options={HospitalAdmissionOptions}
          />
        </Labelled>
        <Labelled label="Date of isolation">
          <DatePicker value={data["dateOfIsolation"]}
            onChange={setData("dateOfIsolation")}/>
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
