/** @jsx jsx */
import React, { Component } from "react";
import Iframe from "react-iframe";
import { jsx } from "@emotion/core";
import styles from "./CollectorMap.css";

class CollectorMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.parent.setState({ currentPage: window.location.pathname });
  }

  render() {
    return (
      <>
        <h2>
          Read dead redemption collectors map from{" "}
          <a href="https://twitter.com/_jeanropke">@JeanRopke</a> :
        </h2>
        <Iframe
          url="https://jeanropke.github.io/RDR2CollectorsMap/?utm_source=madamnazar.io"
          title="Jean Ropke RDR2 Collector Map"
          width="100%"
          height="640px"
          frameBorder="border: 4px solid var(--Armadillo);"
          id="myId"
          className="mv-32"
          display="initial"
          position="relative"
          css={styles.iframe}
        />
        <h4>
          Credit:{" "}
          <a href="https://github.com/jeanropke/RDR2CollectorsMap">
            @JeanRopke
          </a>
        </h4>
      </>
    );
  }
}
export default CollectorMap;
