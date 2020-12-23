import React from 'react'
import { buyIceCream } from '../redux'
import {connect} from 'react-redux'

const IceCreamContainer = ({numOfIceCream, buyIceCream}) => {
    return (
        <div>
            <h2>Number of Ice Cream = {numOfIceCream}</h2>
            <button onClick={buyIceCream}>Buy IceCream</button>
        </div>
    )
}

// set state to props - the field numOfIceCream is going to passed to the component as a props
const mapStateToProps = (state) => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

// set discpathc to props - the action buy IceCream is going to be pass to the component as props
const mapDispatchToProps = dispatch => {
    return{
        buyIceCream:()=> dispatch(buyIceCream())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
