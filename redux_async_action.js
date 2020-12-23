// New package added 
// axios - to make request to an API
// redux-thunk - define async action creators - requires middleware 
// this means that, your action creator can return function instead of object

const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleWare = require('redux-thunk').default
const axios = require('axios')

// initial state
const initialState = {
    loading:false,
    users:[],
    error:''
}

// action types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAIL ='FETCH_USERS_FAIL'

// action creators - 
const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = error => {
    return{
        type: FETCH_USERS_FAIL,
        payload:error
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
                error:''
            }
        case FETCH_USERS_FAIL:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
    }
}

// Async Actions Creator
// it doesnt return object.. it returns a function that dispatches action creators
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUserRequest())    // on running - this will trigger state to change

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the array of users
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))      // 2nd state change
            })
            .catch(error=>{
                // error.message is the error description
                dispatch(fetchUserFailure(error.message))   // 2nd state change
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleWare)) // applying thunk to middleware allows async action
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())