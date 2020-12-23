const redux = require('redux')

const combinedReducers = redux.combineReducers  
const applyMiddleware = redux.applyMiddleware // NEW
const createStore = redux.createStore 

const reduxLogger = require('redux-logger') // NEW

const logger = reduxLogger.createLogger() // NEW


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const CREATE_TRANSCATION = ''

function buyCake(){
    return{
        type: BUY_CAKE,            
        info:'First Redux Action'   
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM,            
        info:'First Redux Action'   
    }
}

function createTransaction(){
    return{
        type:CREATE_TRANSCATION
    }
}

const initialCakeState = {
    numOfCakes:10,  
}

const initialIceCreamState = {
    numOfIceCream:15
}

const initialTransactionState = {
    transaction:0
}

const cakeReducer = (state=initialCakeState,action) => {
    switch(action.type){
        case BUY_CAKE: 
            return{
                ...state,   
                numOfCakes: state.numOfCakes -1     
            }
        default:return state
    }
}

const iceCreamReducer = (state=initialIceCreamState,action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,   
            numOfIceCream: state.numOfIceCream -1     
        }
        default:return state
    }
}

const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// create store argument
const store = createStore(rootReducer, applyMiddleware(logger))  // Updated ! 
console.log('Initial State', store.getState())            

const unsubscribe = store.subscribe(()=>{}) // subscribe always need a callback function

store.dispatch(buyCake()) 
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe() 