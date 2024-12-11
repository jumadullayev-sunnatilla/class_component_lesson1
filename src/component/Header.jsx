import React, { Component } from "react";
import logo from "../assets/Logo.png";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-[#1C1814]">
        <div className="container  text-white py-6 flex justify-between items-center header">
          <ul className="flex items-center gap-10 text-lg">
            <li className="cursor-pointer hover:text-red-800">Home</li>
            <li className="cursor-pointer hover:text-red-800">About</li>
            <li className="cursor-pointer hover:text-red-800">Menu</li>
            <li className="cursor-pointer hover:text-red-800">Reservation</li>
          </ul>
          <img className="w-[72px] h-14" src={logo} alt="" />
          <ul className="flex items-center gap-10 text-lg">
            <li className="cursor-pointer hover:text-red-800">Pages</li>
            <li className="cursor-pointer hover:text-red-800">Shop</li>
            <li className="cursor-pointer hover:text-red-800">Contact</li>
            <IoSearch />
            <RiShoppingBag3Line />
          </ul>
        </div>
      </div>
    );
  }
}
