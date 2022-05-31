import React from "react";
import { connect } from "react-redux";

import { buyIceCream } from "../redux";

function iceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecream - {props.noOfIceCreams}</h2>
      <button onClick={props.buyIceCreams}>Buy icecream</button>
    </div>
  );
}

//create a new function

const mapStateToProps = (state) => {
  return {
    noOfIceCreams: state.iceCream.noOfIceCreams,
  };
};

//crae another function to dispatch

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(iceCreamContainer);
