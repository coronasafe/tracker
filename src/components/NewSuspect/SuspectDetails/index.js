import React, { useState } from "react";
import Labelled from "../../common/Labelled";
import Textarea from "../../common/Textarea";
import Dropdown, { AsyncDropdown } from "../../common/Dropdown";
import Input from "../../common/Input";
import FormRow from "../../common/FormRow";
import RadioSelect from "../../common/RadioSelect";
import PassengerForm from "./PassengerForm";
import ContactForm from "./ContactForm";
import { getDistrictOptions } from "./service";
import Button from "../../common/Button";

export default function SuspectDetails() {
  const [formData, setFormData] = useState({});
  function setData(key, value) {
    setFormData({
      ...formData,
      [key]: value,
    });
  }
  console.log("Form Data : ",formData)
  return (
    <div
      className="flex justify-center overflow-scroll min-h-screen"
      style={{ background: "#edf2f7" }}
    >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6 flex flex-col my-4 w-3/4 h-auto">
        <FormRow bordered>
          <Labelled label="Name">Amal</Labelled>
          <Labelled label="Date of birth">27/10/1996</Labelled>
          <Labelled label="Gender">Male</Labelled>
          <Labelled label="Phone Number">+91 9744859241</Labelled>
        </FormRow>
        <FormRow>
          <Labelled label="Occupation">
            <Dropdown
              options={["UI Developer", "API Developer"]}
              currentOption={formData["occupation"]}
              setOption={(newValue) => setData("occupation", newValue)}
            />
          </Labelled>
          <Labelled label="Head of Household">
            <Input placeholder={"Head of Household"} />
          </Labelled>
        </FormRow>
        <FormRow>
          <Labelled label="Address">
            <Textarea />
          </Labelled>
        </FormRow>
        <FormRow totalWidth={4}>
          <Labelled label="District">
            <AsyncDropdown
              loadOptionsService={getDistrictOptions}
              setOption={(newValue) => {
                setData("district", newValue);
              }}
            />
          </Labelled>
        </FormRow>
        <FormRow>
          <Labelled label="Type of LSG">
            <Dropdown options={[]} />
          </Labelled>

          <Labelled label="Name of Panchayat/Municipality/Corporation">
            <Dropdown options={[]} />
          </Labelled>
        </FormRow>
        <FormRow>
          <Labelled label="Type of Health institution">
            <Dropdown options={[]} />
          </Labelled>

          <Labelled label="Name of nearest PHC/FHC">
            <Dropdown options={[]} />
          </Labelled>
        </FormRow>
        <FormRow>
          <Labelled label="Type">
            <RadioSelect
              value={formData["type"]}
              setValue={(value) => {
                setData("type", value);
              }}
              options={["Passenger", "Contact", "Patient", "Suspect"]}
            />
          </Labelled>
        </FormRow>
        {formData["type"] &&
          (formData["type"] === "Passenger" ? (
            <PassengerForm data={formData} setData={setFormData} />
          ) : (
            <ContactForm data={formData} setData={setFormData} />
          ))}
        <FormRow><Button text={"Submit"} disabled={true} onClick={()=>{}}/></FormRow>
      </div>
    </div>
  );
}
