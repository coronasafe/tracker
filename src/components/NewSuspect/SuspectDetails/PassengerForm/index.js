import React from 'react';
import FormRow from '../../../common/FormRow';
import Labelled from '../../../common/Labelled';
import Dropdown from '../../../common/Dropdown';
import Textarea from '../../../common/Textarea';

function PassengerForm(){
    return <>
    <FormRow>
      <Labelled label="Date of departure from affected country/region">
        <Dropdown options={[]} />
      </Labelled>
      <Labelled label="Date of reciept of information">
        <Dropdown options={[]} />
      </Labelled>
    </FormRow>
    <FormRow>
      <Labelled label="Country/Region of visit">
        <Dropdown options={[]}/>
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
    ;
}
export default PassengerForm;