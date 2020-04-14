import { actions } from './fireRequest';

const initState ={
    currentPatient: {"name":"TestConstant","dob":"2020-04-14T05:34:19.672Z","gender":"Male","phone":"9962366775","typeOfLSG":"Municipality","occupation":"Healthcare Provider","headOfHousehold":"Yes","address":"This is a Constant Test Address","district":{"id":4,"name":"Alappuzha","state":1},"nameOfLSG":{"id":1156,"name":"Chengannur  Municipality, Alappuzha District","body_type":10,"localbody_code":"M040100","district":4},"typeOfHC":"Private Hospital","nameOfHC":{"id":234,"name":"Apple Ton","local_body":null,"district":1,"state":1,"facility_type":"Private Hospital","address":"Apple Ton\nMiddle of No Where","location":null,"oxygen_capacity":2,"phone_number":"+919746105367","local_body_object":null,"district_object":{"id":1,"name":"Thiruvananthapuram","state":1},"state_object":{"id":1,"name":"Kerala"},"modified_date":"2020-04-10T16:19:52.223835+05:30","created_date":"2020-04-10T16:19:19.546072+05:30"},"type":"Contact","covidPatientCode":{"name":"test - 1 - 1987","value":{"id":2535,"gender":"Male","phone_number":"9876431201","patient_id":120,"name":"test","date_of_birth":null,"year_of_birth":1987,"state_id":1}},"relationToPositivePatient":{"value":"NEIGHBOR","name":"Neighbor"},"dateOfFirstContact":"2020-03-31T18:30:00.000Z","dateOfLastContact":"2020-04-02T18:30:00.000Z","typeOfContact":"Secondary","modeOfContact":{"value":"LIVE_IN_SAME_HOUSEHOLD","name":"4. Lives in the same household as the patient."},"symptoms":["Cough"],"sampleSent":"No","homeIsolation":"Yes","hospitalAdmission":"Yes","dateOfIsolation":"2020-03-30T18:30:00.000Z","remarks":"This is a Test Remark"}
}

const reducer = (state = initState, changeAction) => {
    switch (changeAction.type) {
        case actions.FETCH_REQUEST: {
            const obj = {...state};
            obj[changeAction.key] = {
                isFetching: true,
                error: false,
            };
            return obj;
        }
        case actions.FETCH_REQUEST_SUCCESS: {
            const obj= {...state};
            obj[changeAction.key] = {
                isFetching: false,
                error: false,
                data: changeAction.data,
            };
            return obj;
        }
        case actions.FETCH_REQUEST_ERROR: {
            const obj= {...state};
            obj[changeAction.key] = {
                isFetching: false,
                error: true,
                errorMessage: changeAction.error,
            };
            return obj;
        }

        case actions.SET_DATA: {
            const obj= {...state};
            obj[changeAction.key] = changeAction.value;
            return obj;
        }

        default:
            return state;
    }
};
export default reducer;
