export default {

    // Auth Endpoints
    login: {
        path: '/api/v1/auth/login/',
        method: 'POST',
        noAuth: true,
    },

    token_refresh: {
        path: '/api/v1/auth/token/refresh',
        method: 'POST'
    },

    token_verify: {
        path: '/api/v1/auth/token/verify',
        method: 'POST'
    },

    // User Endpoints: not sure if we need them
    currentUser: {
        path: '/api/v1/users/getcurrentuser',
    },

    userList: {
        path: '/api/v1/users',
    },
    readUser: {
        path: '/api/v1/users',
    },

    createUser: {
        path: '/api/v1/users/',
        method: 'POST',
        noAuth: true,
    },

    updateUser: {
        path: '/api/v1/users',
        method: 'PUT'
    },

    partialUpdateUser: {
        path: '/api/v1/users',
        method: 'PATCH'
    },
    
    deleteUser: {
        path: '/api/v1/users',
        method: 'DELETE'
    },
    searchPatient:{
        path:'api/v1/patient/search/',
        method: 'GET'
    },
    getPatients: {
        path: '/api/v1/patient',
        method: 'GET'
    },
    getDistrictsList:{
        path:"/api/v1/district/",
        method:"GET"
    }
}
