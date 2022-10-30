import "./nav.css";
// import { Link } from "react-router-dom";

import * as React from 'react';
// import ReactDOM from 'react-dom';
import Avatar from '@mui/material/Avatar';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbox">
                <div  className="logoimage-div"><img src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg" alt="" className="logoimage" /></div>
                <div className="input-div">
                    <div className="delivery-add">Deliver to 110002 </div>
                    <input type="text" className="navinput" placeholder="Search for medicine & wellness products.........." />
                </div>
                {/* <Link  > */}
                    <div className="cart">Cart</div>
                {/* </Link> */}
                <div className="signin">Sign In/Sign up</div>
            </div>
        </div>
    )
}


export const Navbar1 = () => {
    return (
        <div className="navbar1">
            <div className="types">
                <div><Avatar alt="Remy Sharp" src="	https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/medicine.svg" /><p>Medicine</p> </div>
                <div><Avatar alt="Travis Howard" src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg" /><p>Wellness</p></div>
                <div><Avatar alt="Travis Howard" src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" /><p>Lab Tests</p></div>
                <div><Avatar alt="Travis Howard" src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg" /><p>Beauty</p></div>
                <div><Avatar alt="Travis Howard" src="	https://www.netmeds.com/assets/version1649433944/gloryweb/images/icons/health-library.svg" /><p>Health Corner</p></div>
            </div>

        </div>
    )
}


