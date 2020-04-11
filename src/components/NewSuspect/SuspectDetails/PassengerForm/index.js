import React from "react";
import FormRow from "../../../common/FormRow";
import Labelled from "../../../common/Labelled";
import  { AsyncDropdown } from "../../../common/Dropdown";
import { getCountryOptions } from "./service";
import CommonSection from "../CommonSection";
import DatePicker from "../../../common/DatePicker";

function PassengerForm({ data, setData }) {
  return (
    <>
      <FormRow>
        <Labelled label="Date of departure from affected country/region">
          <DatePicker onChange={setData("dateOfDeparture")} value={data["dateOfDeparture"]}/>
        </Labelled>
        <Labelled label="Date of reciept of information">
          <DatePicker onChange={setData("dateOfReciept")} value={data["dateOfReciept"]}/>
        </Labelled>
      </FormRow>
      <FormRow totalWidth={2}>
        <Labelled label="Country/Region of visit">
          <AsyncDropdown 
            loadOptionsService={getCountryOptions}
            setOption={setData("countryOfVisit")}/>
        </Labelled>
      </FormRow>
      <CommonSection data={data} setData={setData}/>
    </>
  );
}
export default PassengerForm;
