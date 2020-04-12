import { fireRequest, actions } from './fireRequest';

// User
export const postLogin = (form) => {
    return fireRequest('login', [], form);
};

export const getCurrentUser = () => {
    return fireRequest('currentUser');
};

export const signupUser = (form) => {
    return fireRequest("createUser", [], form)
};

export const searchPatient = (form) => {
    return fireRequest("searchPatient", [] ,form)
}

export const setCurrentPatient = (patientData)=>{
    return (dispatch)=>{
        dispatch({
            type:actions.SET_DATA,
            key:"currentPatient",
            value:patientData
        });
    }
}
