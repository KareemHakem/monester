import React from 'react'

import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

import {Link} from "react-router-dom"


import "./FooterStyle.css"

export default function Footer() {
    return (
        <>
        <div className="footer">
            <div className="footer_left">
                <div className="btn">
                  <HomeIcon className="icon-2" />
                  <Button style={{
                   color:"#fff",
                   height:40,
                   width:150,
                   fontSize:17,
                   fontWeight:"bold"}} className="btn">HOME</Button>
                </div>

                <div className="btn">
                    <SettingsIcon className="icon-2" />
                      <Button style={{
                       color:"#fff",
                       height:40,
                       width:150,
                       fontSize:17,
                       fontWeight:"bold"}} className="btn">SERVICE</Button>
                </div>

                <div className="btn">
                    <InfoIcon className="icon-2" />
                      <Button style={{
                       color:"#fff",
                       height:40,
                       width:150,
                       fontSize:17,
                       fontWeight:"bold"}} className="btn">ABOUT US</Button>
                </div>

            </div>

            <div className="middle">
                <div>
                    <Link to ="/">
                    <IconButton color="primary" aria-label="add to shopping cart" style={{
                       height:55,
                       width:55,
                       border:"1px solid black",
                       marginLeft:80,
                       backgroundColor:"#fff" }} >
                        <ShoppingCartIcon style={{fontSize:35, color:"#000"}}  />
                    </IconButton>
                    </Link>
                </div> 

                <div>
                    <MailIcon style={{fontSize:40}} className="icon" />
                    <FacebookIcon style={{fontSize:40}} className="icon" />
                    <InstagramIcon style={{fontSize:40}} className="icon" />
                    <TwitterIcon style={{fontSize:40}} className="icon" />
                </div>

            </div>



            <div className="footer_left">
            <div className="btn">
                    <ContactPhoneIcon/>
                      <Button style={{
                       color:"#fff",
                       height:40,
                       width:150,
                       fontSize:17,
                       fontWeight:"bold"}} className="btn">CONTACT US</Button>
                </div>

                <div className="link">
                <Link style={{marginLeft:25, color:"#fff", textDecoration:"none" }} >Hello@hello.com</Link>
                <br/>
                <br/>
                <Link  style={{marginLeft:25, color:"#fff", textDecoration:"none" }} >Hello@hello.com</Link>
                </div>
            </div>            
        </div>
        </>
    )
}
