import { fireRequest } from './fireRequest';

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

export const getPatients = (params) => {
    return fireRequest("getPatients", [], params)
};
