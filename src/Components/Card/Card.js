import React from "react";

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

import "./CardStyle.css";

export default function Card({ id, name, Image, price, rating, numReviews }) {
     const  history = useHistory()
     const goToDetailPage = () =>{
      history.push(`/Products/${id}`)
     }
     
     
  return (
    <>
      <div  onClick={()=>goToDetailPage()} >
        <div className="card">
          <img className="img" src={Image} alt="airpods" />

          <h1>{name}</h1>

          <Box
            style={{ display: "flex", fontSize: 30 }}
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <Rating
              style={{ fontSize: 25, color:"#FF9529"}}
              name="disabled"
              value={rating}
              disabled
            />
          </Box>

          <div className="flex">
            <p style={{fontSize:14, color:"#828289"}} >{numReviews}</p>
            <p style={{fontSize:20, color:"#828289"}} > {price} </p>
          </div>

          <Button className="btn-5">VIEW</Button>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}
