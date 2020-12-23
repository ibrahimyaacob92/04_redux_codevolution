import React from 'react'
import { buyCake } from '../redux'
import {connect} from 'react-redux'

const CakeContainer = ({numOfCakes, buyCake}) => {
    return (
        <div>
            <h2>Number of Cakes = {numOfCakes}</h2>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
    )
}

// set state to props - the field numOfCakes is going to passed to the component as a props
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.numOfCakes
    }
}

// set discpathc to props - the action buy cakes is going to be pass to the component as props
const mapDispatchToProps = dispatch => {
    return{
        buyCake:()=> dispatch(buyCake())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
