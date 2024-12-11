import React, { Component } from "react";
import { PiPlayCircleThin } from "react-icons/pi";
import bg from "../assets/bg.png";

export default class Test extends Component {
  render() {
    return (
      <div className="bg-[#14110E]">
        <div
          style={{
            width: "1920px",

            margin: "0 auto",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className=""
        >
          <div className="container text-white py-40">
            <h1 className="text-6xl font-bold w-[530px]">
              Enjoy Your Morning Coffee.
            </h1>
            <p className="my-10 text-basel  w-[511px]">
              The coffee is brewed by first roasting the green coffee beans over
              hot coals in a brazier. Given the opportunity.
            </p>
            <div className="flex justify-between items-center test_Play ">
              <button className="bg-[#C99E71] py-5 px-10  font-black text-base">
                Test Coffee
              </button>
              <div className="flex flex-col items-center gap-1">
                <PiPlayCircleThin />
                <span>PLAY VIDEO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
