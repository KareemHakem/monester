import React from "react";

import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PersonIcon from "@material-ui/icons/Person";

import "./NavBarStyle.css";

export default function NavBar() {
  return (
     <>
      <div className="nav">
        <Link to="/">
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            style={{
              height: 60,
              width: 60,
              border: "1px solid black",
              marginLeft: 40,
              backgroundColor: "#fff",
            }}
          >
            <ShoppingCartIcon style={{ fontSize: 35, color: "#000" }} />
          </IconButton>
        </Link>

        <div className="search-bar">
          <SearchIcon style={{ marginLeft: 10, color: "gray", marginTop: 2 }} />
          <input
            className="input"
            type="text"
            placeholder="search for products"
          />
        </div>

        <div className="nav-left">
          <Link style={{ textDecoration: "none" }} to="/Cart">
            <button className="btn-1">
              {" "}
              CART <ShoppingBasketIcon />{" "}
            </button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/Login">
            <button className="btn-2">
              {" "}
              LOGIN <PersonIcon />{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
