import React from "react";

import products from "../../Data/Products";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { useState } from "react";
import { grey } from "@material-ui/core/colors";
import { useHistory, useParams } from "react-router-dom";

import "./ProductsDetailPageStyle.css";


export default function ProductsDetailPage({cart, setCart}) {
  const [value, setValue] = useState(1);
  const { id } = useParams();
  const history = useHistory();

  const product = products.find((product) => product.id === id);

  const handleTextField = (e) => {
    if (value > 0) {
      setValue(e.target.value);
    } else {
      setValue(1);
    }
  };

  const addToCart = () => {
    setCart([...cart, product]);
    history.push('/cart');
  };

  console.log(product);

  return (
    <div className="margin">
      <div className="top-bart">
        <div className="left-side">
          <img src={product.image} alt="images" />
        </div>

        <div classNam="right-side">
          <h1
            style={{
              fontSize: 28,
              fontWeight: 100,
            }}
          >
            {product.name}
          </h1>
          <br />
          <p
            style={{
              fontSize: 25,
              fontWeight: 100,
            }}
          >
            {product.brand}
          </p>
          <br />
          <div className="box">
            <div className="flex-box">
              <p>Price</p>
              <p>{product.price}</p>
            </div>
            <div className="line"></div> <br/>
            <div className="flex-box">
              <p>Status</p>
              <p>in Stocks</p>
            </div>
            <div className="line"></div>
            <div className="flex-box">
              <p style={{ marginTop: 30 }}>Qyt</p>
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
            </div>
            <div className="line"></div>
            <div>
              <Button onClick={() => addToCart()} className="btn-6">
                ADD TO CART
              </Button>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 30 }}>
            <Box
              style={{ display: "flex", fontSize: 30 }}
              component="fieldset"
              mb={3}
              borderColor="transparent"
            >
              <Rating
                style={{ fontSize: 25, Color: "#ffb411" }}
                name="disabled"
                value={product.rating}
                disabled
              />
            </Box>
            <p
              style={{
                fontSize: 13,
                color: "rgba(0, 0, 0, 0.54)",
                marginTop: 10,
              }}
            >
              {product.numReviews}
            </p>
          </div>
        </div>
      </div>
      <div className=" Description">
        <h1> Description </h1>
        <p>{product.description}</p>
      </div>
    </div>
  );
}