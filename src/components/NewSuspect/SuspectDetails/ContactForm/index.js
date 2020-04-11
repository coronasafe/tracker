import React from "react";
import FormRow from "../../../common/FormRow";
import Labelled from "../../../common/Labelled";
import Input from "../../../common/Input";
import Dropdown from "../../../common/Dropdown";
import Textarea from "../../../common/Textarea";

function ContactForm() {
  return (
    <>
      <FormRow>
        <Labelled label="Covid Patient Code">
          <Input helpText="(Identified Positive Case)" />
        </Labelled>
        <Labelled label="Relation to identified-positive-patient">
          <Dropdown options={[]} />
        </Labelled>
      </FormRow>
      <FormRow>
        <Labelled label="Date of First Contact">
          <Dropdown options={[]} />
        </Labelled>
        <Labelled label="Date of Last Contact">
          <Dropdown options={[]} />
        </Labelled>
      </FormRow>
      <FormRow>
        <Labelled label="Primary/Secondary">
          <Dropdown options={[]} />
        </Labelled>
        <Labelled label="Mode of Contact">
          <Dropdown options={[]} />
        </Labelled>
        <Labelled label="Condition of Contact">
          <Dropdown options={[]} />
        </Labelled>
      </FormRow>
      <FormRow>
        <Labelled label="Sample Sent">
          <Dropdown options={[]} />
        </Labelled>
        <Labelled label="Lab">
          <Dropdown options={[]} />
        </Labelled>
        <Labelled label="Lab Result">
          <Dropdown options={[]} />
        </Labelled>
      </FormRow>
      <FormRow totalWidth={3}>
        <Labelled label="Severity of Contact">
          <Dropdown options={[]} />
        </Labelled>
        <Labelled label="Type of Contact">
          <Dropdown options={[]} />
        </Labelled>
      </FormRow>
      <FormRow>
        <Labelled label="Home Isolation">
          <Dropdown options={[]} />
        </Labelled>
        <Labelled label="Hospital Admission">
          <Dropdown options={[]} />
        </Labelled>
        <Labelled label="Date of isolation">
          <Dropdown options={[]} />
        </Labelled>
      </FormRow>
      <FormRow>
        <Labelled label="Remarks">
          <Textarea />
        </Labelled>
      </FormRow>
    </>
  );
}
export default ContactForm;
