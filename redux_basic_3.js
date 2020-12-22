// Breakdown reducer to multiple function

const redux = require('redux')

const combinedReducers = redux.combineReducers  // NEW
const createStore = redux.createStore 

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


// store.createStore only accepts one reducer
// we need to combine the reducer to a single param
const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer)  // Updated !
console.log('Initial State', store.getState())            

const unsubscribe = store.subscribe(()=>console.log('Updated State',store.getState())) 

store.dispatch(buyCake()) 
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe() 