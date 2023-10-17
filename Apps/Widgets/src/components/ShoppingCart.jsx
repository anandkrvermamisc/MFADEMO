import React, {useState, useEffect} from "react";

const ShoppingCart = (props) => {
    return (
        <div>Your Shopping cart contains: {props.itemCount} <b></b> item(s)</div>
    );
}

export default ShoppingCart;