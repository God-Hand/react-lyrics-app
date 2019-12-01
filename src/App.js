import React from "react";
import Navbar from "./components/Navbar";
import { StylesProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const axios = require("axios");

export default function App() {
  async function getUser() {
    try {
      let response = await axios.get(
        // "https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=callback&quorum_factor=1&apikey=60f81523280b729c3aa9e38332f0e94c"
        "https://api.musixmatch.com/ws/1.1/chart.tracks.get?format=jsonp&callback=callback&country=us&apikey=60f81523280b729c3aa9e38332f0e94c"
      );
      const tracks = JSON.parse(
        response.data.substring(9, response.data.length - 2)
      ).message.body;
      console.log(tracks);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Router>
      <div>
        <StylesProvider injectFirst>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/" component={Navbar} />
            <Route render={() => <h2>404 ERROR</h2>} />
          </Switch>
        </StylesProvider>
      </div>
    </Router>
  );
}
