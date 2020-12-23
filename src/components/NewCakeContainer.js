import React, {useState} from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'

const NewCakeContainer = ({numOfCakes, buyCake}) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes = {numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => buyCake(number) }>Buy {number} Cakes</button>

        </div>
    )
}

// set state to props - the field numOfCakes is going to passed to the component as a props
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// set discpathc to props - the action buy cakes is going to be pass to the component as props
const mapDispatchToProps = dispatch => {
    return{
        buyCake:(number)=> dispatch(buyCake(number))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
