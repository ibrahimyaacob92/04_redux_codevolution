import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = ({item, buyItem}) => {
    return (
        <div>
            <h2>Item - {item}</h2>
            <button  onClick={buyItem}>Buy Items</button>
        </div>
    )
}

// own props can be passed from the parent compoent
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
    return {
        item:itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () =>dispatch(buyCake()): () => dispatch(buyIceCream())
    return{
        buyItem: dispatchFunction
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (ItemContainer)
