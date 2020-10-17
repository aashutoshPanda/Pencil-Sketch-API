/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import UploadImage from "./components/UploadImage";
function App() {
  return (
    <div className="App">
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Image to Sketch </h1>
            <a
              target="_blank"
              href="https://github.com/aashutoshpanda"
              className="give-padding fa fa-github"
            >
              Check out the Source Code
            </a>
          </div>
        </div>
      </section>
      <div className="columns">
        <div className="column" />

        <div className="column">
          <UploadImage />
        </div>
        <div className="column" />
      </div>
    </div>
  );
}

export default App;
