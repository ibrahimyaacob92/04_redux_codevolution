import React from 'react'
import {buyCake} from '../redux'
import {useSelector, useDispatch} from 'react-redux' // make your code cleaner

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)   // alternative of maps state to props
    const dispatch = useDispatch()  // will use dispatch to enable action to be pass
    return (
        <div>
            <h2>Number of Cakes = {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
