const redux = require('redux')

// Store - main centralize storage of data in app
const createStore = redux.createStore 

// Action Type
const BUY_CAKE = 'BUY_CAKE' // normally its placed inside a file that have all the types

// Action
function buyCake(){
    return{
        type: BUY_CAKE,             // main property
        info:'First Redux Action'   // your custom property
    }
}

// Reducers function always accept 2 argument: 1. InitialState, 2. Action that changes the state
// Reducer will always return the state
// Syntax that represent this (previousState, action) => newState
const initialState = {
    numOfCakes:10   // example, initially we have 10 cakes
    // can have more.. depend on your data
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,   // best practice so that we return all the states.. assuming it have different properties
            numOfCakes: state.numOfCakes -1     // in this case.. buying a cake would reduce your cake count
        }
        default:return state
    }
} 

// store object only accepts reducer
// data from the state can be access using getState()
// store allows state to be updated with dispatch(action)
// store allow register listener using subscribe(listener)
const store = createStore(reducer)
console.log('Initial State', store.getState())                      // testing the initial state

// subscribe() will cause any changes in the state to execute the callback
// subscribe() will return unsubscribe function
const unsubscribe = store.subscribe(()=>console.log('Updated State',store.getState())) 

// store will automatically link the reducers with the action based on the "TYPE"
store.dispatch(buyCake()) 
store.dispatch(buyCake())
store.dispatch(buyCake())

console.log(store.getState()) // simply accessing the get state

unsubscribe() // running this would remove the listener