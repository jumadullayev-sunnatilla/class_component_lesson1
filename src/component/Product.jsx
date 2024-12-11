import React, { Component } from "react";
import axios from "axios";

export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => this.setState({ data: res.data.products }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="bg-[#14110E]">
        <div className="container">
          <h3 className="text-[#C99E71] text-center ">Popular product</h3>
          <h1 className="text-center">Coffee popular Product</h1>
          <div className="flex justify-between flex-wrap gap-y-5">
            {this.state.data?.slice(0, 6).map((item) => (
              <div
                className="text-white w-[370px] p-12 bg-[#121315] "
                key={item.id}
              >
                <img
                  src={item.images[0]}
                  className="w-[270px] h-[313px] bg-[#B98964]  rounded-sm"
                  alt=""
                />
                <h1 className="text-xl">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
