import { MediaDescription } from "./media-description";
import React from "react";
import { MediaSource } from "./media-source";

export class MediaLoader extends React.Component {
    constructor(props) {
        super(props);
        const mediaData = MediaSource.categories[0].videos.map((video) => {
          return {
            description: video.description,
            title: video.title,
            source: video.sources[0],
          };
        }); // media data is an array
        this.state = {
          mediaList: mediaData,
        };
      }

  render() {
    return (
      <div className="container mt-3">
        <div className="d-flex flex-wrap">
          {this.state.mediaList.map((item) => (
            <MediaDescription
              description={item.description}
              title={item.title}
              source={item.source}
            />
          ))}
        </div>
      </div>
    );
  }
}
