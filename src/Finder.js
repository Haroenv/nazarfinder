/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import RDAppear from "./RDAppear";
import Map from "./Map";
import { isConditional } from "@babel/types";

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const styles = {
  posterGrid: css``,
  posterWrapper: css`
    filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.4));
  `,
  posterLayout: css`
    position: relative;

    margin: auto;
    border-radius: 138px;
    z-index: 2;

    .header {
      text-align: center;
    }

    @media (min-width: 960px) {
      padding: 0 2em;
    }
  `,
  badge: css`
    width: 120px;
    height: 120px;
    border-radius: 100px;
    border: 4px solid var(--Armadillo);
    background: var(--Twine);
    box-shadow: 0 0 32px rgba(0, 0, 0, 0.2);
    display: block;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px auto;
    animation: roll 2s ease infinite;
    filter: sepia(1) saturate(0.65);

    img {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }

    @keyframes roll {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `,
  avatar: css`
    animation: blur 5s forwards;
    height: 100px;
    max-height: 640px;
    max-width: 640px;
    position: relative;
    width: 100px;
    overflow: hidden;

    div {
      height: 100%;
      position: absolute;
      width: 100%;
    }

    .normal {
      background-size: cover;
    }

    .invert {
      animation: mask 5s steps(69) forwards;
      background-size: cover;
      filter: invert(1) grayscale(1);
      -webkit-mask: url(${require("./images/sheet.png")});
      -webkit-mask-size: 7000% 100%;
      mask: url(${require("./images/sheet.png")});
      mask-size: 7000% 100%;
    }

    @keyframes blur {
      from {
        filter: blur(3px);
        opacity: 0;
      }
      to {
        filter: blur(0px);
        opacity: 1;
      }
    }

    @keyframes mask {
      from {
        -webkit-mask-position: 0% 0;
        mask-position: 0% 0;
      }
      to {
        -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
      }
    }
  `
};

const InfoBox = props => {
  return (
    <>
      <div
        className={`modal pos-absolute w-800 h-auto bgc-mars-0 left-0 right-0 top-0 bot-0 m-auto z-max bxs-default p-16 ${
          props.parent.state.modal === true ? "d-block" : "d-none"
        }`}
        css={css`
          z-index: 9999999999;
          border: 4px solid var(--Armadillo);
          background: var(--Armadillo);
          box-shadow: 0 0 32px rgba(0, 0, 0, 0.2);
          max-width: 90%;
          max-height: 90%;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        `}
      >
        <button
          onClick={() => {
            props.parent.setState({
              modal: !props.parent.state.modal,
              modalImage: null
            });
          }}
        >
          Close window
        </button>
        <img
          src={props.parent.state.modalImage}
          className="w-100p h-100p obf-contain obp-center"
          alt={props.parent.state.modalImage}
          onClick={() => {
            props.parent.setState({
              modal: !props.parent.state.modal,
              modalImage: null
            });
          }}
        />
      </div>

      <div css={styles.posterWrapper}>
        <div css={[styles.posterGrid, styles.posterLayout]}>
          <section
            className="pv-48"
            css={css`
              text-align: center;
            `}
          >
            <div>
              <div>
                <h2
                  className="m-0 p-0 pl-24"
                  css={css`
                    display: inline-block;
                    font-size: 38px;
                    letter-spacing: 2px;
                    vertical-align: middle;
                    text-shadow: -1px 1px 0 black;
                  `}
                >
                  In {capitalize(props.region_precise)}  in the region of{" "}
                  {capitalize(props.region)}
                </h2>
              </div>
              <div>
                <p>
                  In the {capitalize(props.cardinals.split(" ")[0])} 
                  {capitalize(props.cardinals.split(" ")[1])} side of the map.
                  nearby{" "}
                  {props.nearby.map(
                    (poi, id) =>
                      console.log(id, props.nearby.length - 1) || (
                        <b key={id}>
                          {id === props.nearby.length - 1 && " & "}
                          {capitalize(poi)}
                          {id !== props.nearby.length - 1 &&
                            (id !== props.nearby.length - 2 && ", ")}
                        </b>
                      )
                  )}
                  .
                </p>
                <a href={props.link}>{props.link}</a>
              </div>
            </div>

            <div>
              <div
                className="cursor-pointer d-grid g-2"
                css={css`
                  padding: 8px;
                `}
              >
                <RDAppear
                  image={props.media.full}
                  width={props.parent.state.frameWidth / 2}
                  height={480}
                  onClick={() => {
                    props.parent.setState({
                      modal: true,
                      modalImage: props.media.full
                    });
                  }}
                  childrenStyle={css`
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
                    transform: rotate(-0.3deg);
                    filter: sepia(1) saturate(0.65);

                    @media (max-width: 960px) {
                      width: 100% !important;
                    }
                  `}
                  css={css`
                    @media (max-width: 960px) {
                      width: 100% !important;
                    }
                  `}
                />

                <RDAppear
                  image={props.media.zoom}
                  width={props.parent.state.frameWidth / 2}
                  height={480}
                  onClick={() => {
                    props.parent.setState({
                      modal: true,
                      modalImage: props.media.zoom
                    });
                  }}
                  childrenStyle={css`
                    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
                    transform: rotate(-0.3deg);
                    filter: sepia(1) saturate(0.65);

                    @media (max-width: 960px) {
                      width: 100% !important;
                    }
                  `}
                  css={css`
                    @media (max-width: 960px) {
                      width: 100% !important;
                    }
                  `}
                />
              </div>
            </div>
          </section>
          <section>
            <Map localisation={props.id} />;
          </section>
        </div>
      </div>
    </>
  );
};

class Finder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      failed: null,
      modal: false,
      mapLoc: null
    };
  }

  fetchData = () => {
    fetch("https://madam-nazar-location-api.herokuapp.com/current", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Accept-Encoding": "gzip, deflate",
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAABrO0AAAAAAA8qTMsAShpS43PMvZweECxqTZ728%3DFF6BCPcE2CBuqYeTo00Z88tQxNIPWerPb7fEzmpaUE75nzF8LO",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        Cookie:
          "personalization_id='v1_OHHCF5O+kmx2t+clOEL/6Q=='; guest_id=v1%3A156699205346221382",
        Host: "api.twitter.com'",
        "cache-control": "no-cache"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        this.setState({ data });
      })
      .catch(function(err) {
        console.log("error", err);
      });
  };

  componentDidMount() {
    this.fetchData();

    this.setState({
      frameWidth:
        document.getElementById("frame").getBoundingClientRect().width - 100
    });

    window.addEventListener("resize", () => {
      this.setState({
        frameWidth:
          document.getElementById("frame").getBoundingClientRect().width - 100
      });
    });

    setTimeout(() => {
      this.setState({ loadMore: true });
    }, 5000);

    setTimeout(() => {
      this.setState({ loadEvenMore: true });
    }, 10000);
  }

  render() {
    const dataExists = this.state.data !== null && this.state.data.data;
    console.log(this.state);
    return (
      <>
        <div id="frame">
          {dataExists ? (
            <InfoBox
              id={this.state.data.data._id}
              media={this.state.data.data.location.image}
              region={this.state.data.data.location.region.name}
              region_precise={this.state.data.data.location.region.precise}
              nearby={this.state.data.data.location["near_by"]}
              cardinals={this.state.data.data.location.cardinals.full}
              parent={this}
            />
          ) : (
            <figure
              css={css`
                text-align: center;
              `}
            >
              <figcaption
                css={css`
                  margin-top: 3em;
                `}
              >
                Loading... Fetching some data
                {this.state.loadMore === true && (
                  <p>It can take a few seconds, hang tight</p>
                )}
                {this.state.loadEvenMore === true && (
                  <>
                    {" "}
                    <p>
                      I know pal, it's long, but you know, technology works in
                      mysterious ways
                    </p>
                    <p>
                      The cause of this time to load can be a lot of things..
                      From the Twitter API to a bunch of mices eating your
                      internet cable, but stay here
                    </p>
                  </>
                )}
              </figcaption>
              <span css={styles.badge}>
                <img src={require("./images/hat.png")} alt="loading" />
              </span>
            </figure>
          )}
          {this.state.fail === true && (
            <div
              css={css`
                background: rgba(255, 0, 0, 0.1);
                color: red;
                padding: 16px;
                border-radius: 8px;
                border: 1px solid red;
                margin: 100px auto;
                max-width: 600px;
                line-height: 2;
              `}
            >
              <p>
                An error occured or there is no data to display. <br />
                Please refresh the page, or send us a tweet at @LukyVj
              </p>
            </div>
          )}
        </div>
      </>
    );
  }
}
export default Finder;