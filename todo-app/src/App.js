import { UsernameInput } from "./UsernameInput";
import { LoadComments } from "./load-comments";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MediaDescription } from "./media-description";
import React from "react";
import { MediaSource } from "./media-source";
import { MediaLoader } from "./media";

class SampleVideo extends React.Component {

  render() {
    return <video width={450} height={450} controls autoPlay>
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    </source>
  </video>
  }
}
export default class App extends React.Component {

  render() {
    return (
      <div className="container mt-3">
        <BrowserRouter>
          <Link to="/load-media">Load Media</Link>
          <Routes>
            <Route path="/load-media" Component={MediaLoader} ></Route>
            <Route path="/video" Component={SampleVideo} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
