/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loc: this.props.localisation
    };
  }

  componentDidMount() {
    document.querySelector(`svg circle[id^="${this.state.loc}_"]`).style.fill =
      "red";
  }
  render() {
    console.log(this.state.loc);
    return (
      <>
        <h3>
          This is all her potential locations, the{" "}
          <b
            css={css`
              text-shadow: 1px -1px 0 rgba(0, 0, 0, 0.3);
            `}
          >
            location of the day will be in red
          </b>
        </h3>
        <svg
          width="100%"
          viewBox="0 0 1280 960"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Red Dead Redemption Interactive Map</title>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="Group">
              <image
                id="nazarMap"
                x="0"
                y="0"
                width="1280"
                height="960"
              ></image>
              <circle
                id="12_twelve"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="288"
                cy="836"
                r="7"
              ></circle>
              <circle
                id="11_eleven"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="667"
                cy="694"
                r="7"
              ></circle>
              <circle
                id="10_ten"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="397"
                cy="657"
                r="7"
              ></circle>
              <circle
                id="9_nine"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="1046"
                cy="584"
                r="7"
              ></circle>
              <circle
                id="8_eight"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="648"
                cy="538"
                r="7"
              ></circle>
              <circle
                id="7_seven"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="1163"
                cy="402"
                r="7"
              ></circle>
              <circle
                id="6_six"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="1011"
                cy="360"
                r="7"
              ></circle>
              <circle
                id="5_five"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="820"
                cy="383"
                r="7"
              ></circle>
              <circle
                id="4_four"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="620"
                cy="329"
                r="7"
              ></circle>
              <circle
                id="3_three"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="1182"
                cy="182"
                r="7"
              ></circle>
              <circle
                id="2_two"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="1027"
                cy="227"
                r="7"
              ></circle>
              <circle
                id="1_one"
                stroke="#000000"
                stroke-width="2.39999986"
                fill="#FFFFFF"
                cx="849"
                cy="211"
                r="7"
              ></circle>
            </g>
          </g>
        </svg>
      </>
    );
  }
}

export default Map;