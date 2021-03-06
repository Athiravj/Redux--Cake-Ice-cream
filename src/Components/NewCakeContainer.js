import React, { useState } from "react"
import { connect } from "react-redux"

import { buyCake } from "../redux"

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of cakes - {props.noOfCakes}</h2>
      <input
        type='text'
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
    </div>
  )
}
//create a new function
const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  }
}

//crae another function to dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: number  => dispatch(buyCake(number)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
