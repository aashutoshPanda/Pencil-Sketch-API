import React, { Component } from "react";
import ImageUploader from "react-images-upload";
import { ClockLoader } from "react-spinners";

import ShowImages from "../ShowImages";
const axios = require("axios");
const baseURL = "http://localhost:8000";
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: null,
      loading: false,
      sketchUrl: null,
    };
  }

  onDrop = async (files) => {
    this.setState({
      picture: files[0],
      loading: true,
    });
    const data = new FormData();
    data.append("picture", files[0]);
    axios({
      method: "post",
      url: `${baseURL}/api/sketch/`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data,
    })
      .then(async (response) => {
        this.setState({ loading: false, sketchUrl: response.data });
      })
      .catch(async (err) => {
        console.log("Error in Image Upload", err);
        this.setState({ loading: false });
      });
  };

  render() {
    if (this.state.loading === true)
      return (
        <div className="centerall">
          <ClockLoader size={150} color="purple" />
        </div>
      );
    else
      return (
        <div>
          <ImageUploader
            withIcon={true}
            buttonText="Choose image"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
          <ShowImages
            original={this.state.picture}
            sketchUrl={this.state.sketchUrl}
          />
        </div>
      );
  }
}

export default ImageUpload;
