import React from "react";
import "../../styles/pages/global/header.scss"
import { MdShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import banner from "../../assets/images/banner.png"

export default function Header() {


    return (
        <header>
            <img src={banner}/>
            <div className="searchBar">
                <input type="text" placeholder="Search the Shop"></input>
                <button>{<IoSearchSharp className="sgv--search"/>}</button>
            </div>
            <div>
                <MdShoppingCart className="sgv--cart" />
                <FaUserCircle className="sgv--user" />
            </div>
        </header>
    )
}