import React from "react";

import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import InfoIcon from "@material-ui/icons/Info";

import "./CartStyle.css";

export default function Cart({ cart, setCart }) {
  const [value, setValue] = useState(1);

  console.log(cart);

  const handleTextField = (e) => {
    if (value > 0) {
      setValue(e.target.value);
    } else {
      setValue(1);
    }
  };

  const deleteProduct = (id) => {
    // filter - find
    setCart(cart.filter((c) => c.id !== id));
  };
  // [index = 0, index = 1, index = 2] length = 2
  return (
    <div style={{ minHeight: "100vh", marginTop: 100 }}>
      {cart.length < 1 ? (
        <div className="empty-box">
          {" "}
          <InfoIcon style={{ marginLeft: 40, color: "#000" }} />
          <h1 style={{ marginLeft: 25 }}> your cart is empty</h1>
        </div>
      ) : (
        <>
          {cart.map((cart) => (
            <div key={cart.id}>
              <div className="box-2">
                <div className="flex-cart">
                  <div className="box-img">
                    <img
                      style={{
                        width: 100,
                        height: 100,
                      }}
                      src={cart.image}
                      alt="images"
                    />
                  </div>
                  <div className="box-h1">
                    <h1>{cart.name}</h1>
                  </div>
                  <p>{cart.price}</p>
                  <TextField
                    value={value}
                    onChange={(e) => handleTextField(e)}
                    style={{ width: 40, height: 20 }}
                    id="standard-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteProduct(cart.id)}
                  >
                    <DeleteIcon style={{ color: "red" }} fontSize="large" />
                  </IconButton>
                </div>
              </div>
              <br />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
