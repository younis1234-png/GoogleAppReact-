

import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps"
import {Avatar} from "@material-ui/core"
import Search from "../components/Search"

function Home() {
    return (
        <div className="home">
            

            {/* Header */}
            <div className="home_header">

                <div className="header_left">
                    {/* links */}
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>


                <div className="header_right">
                    {/* links, icon, avatar */}
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />

                </div>

            </div>

            {/* body */}
            <div className="home_body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="goole-clone"/>
                <Search  />
            </div>

        </div>
    )
}

export default Home
