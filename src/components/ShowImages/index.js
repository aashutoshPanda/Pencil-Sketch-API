/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";

class ShowImages extends Component {
  render() {
    const { original, sketchUrl } = this.props;
    console.log({ original, sketchUrl });
    console.log(original && sketchUrl);

    if (original && sketchUrl) {
      return (
        <>
          <div className="columns">
            <div className="column">
              <figure className="image ">
                <img
                  alt="uploaded"
                  src={window.URL.createObjectURL(original)}
                />
              </figure>
            </div>
            <div className="column">
              <figure className="image ">
                <img alt="sketch" src={sketchUrl} />
              </figure>
            </div>
          </div>
          <div className="columns">
            <div className="column" />
            <div className="column">
              <a
                download={`${original.name}_sketch.jpg`}
                href={sketchUrl}
                title="DOWNLOAD"
              >
                DOWNLOAD
              </a>
            </div>
            <div className="column" />
          </div>
        </>
      );
    } else {
      return null;
    }
  }
}
export default ShowImages;
