import React, { Fragment, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import SVGRight from "../main-svg.svg";
import SVGLeft from "../main-svg-left.svg";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Tracks from "./Tracks";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const SearchButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  font-weight: 600;
  border: 0;
  color: white;
  height: 4em;
  padding: 0.7em 3em;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  margin-left: 3.5em;
  text-decoration: None;
  &:active {
    transform: scale(0.95);
  }
`;

const H1 = styled("h1")`
  font-family: "Playfair Display SC", serif;
  font-size: 3.5em;
  padding-top: 1em;
  margin-left: 1em;
`;

export default function Main() {
  const myRef = useRef(null);

  const navigateToTracks = () => {
    myRef.current.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <Router>
      <Fragment>
        <div style={{ flexGrow: 1 }}>
          <Grid container style={{ marginTop: "3em" }}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <div style={{}}>
                <H1>Get Your Lyrics Here</H1>
              </div>
              <div>
                <div
                  style={{
                    marginLeft: "4em",
                    marginTop: "3em",
                    padding: "1em",
                    display: "flex-inline"
                  }}
                >
                  <Link to="/search" style={{ textDecoration: "None" }}>
                    <SearchButton
                      style={{
                        background: "#4e54c8",
                        background:
                          "-webkit-linear-gradient(to bottom, #8f94fb, #4e54c8)",
                        background:
                          "linear-gradient(to bottom, #8f94fb, #4e54c8)"
                      }}
                    >
                      Search Lyrics
                    </SearchButton>
                  </Link>
                  <SearchButton onClick={navigateToTracks}>
                    Top Tracks
                  </SearchButton>
                </div>
                <div>
                  <img
                    src={SVGLeft}
                    alt="Left SVG"
                    style={{
                      width: "50%",
                      height: "auto",
                      zIndex: "-99999"
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <img
                src={SVGRight}
                alt="Right SVG"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </div>
        <Tracks refProp={myRef} />
      </Fragment>
    </Router>
  );
}
