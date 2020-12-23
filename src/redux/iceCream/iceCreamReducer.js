
import {BUY_ICECREAM} from './iceCreamType'

const initialState = {
    numOfIceCream: 20  
}

const iceCreamReducer = (state = initialState, { type }) => {
    switch (type) {

    case BUY_ICECREAM:
        return { 
            ...state,
            numOfIceCream:state.numOfIceCream -1
        }

    default:
        return state
    }
}

export default iceCreamReducer