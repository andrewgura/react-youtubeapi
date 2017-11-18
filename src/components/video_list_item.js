import React, {Component} from 'react';

const VideoListItem = (props) => {

  const video = props.video;
  const onVideoSelect = props.onVideoSelect;

  const imgUrl = video.snippet.thumbnails.default.url;

  return(
    <li onClick={() => onVideoSelect(video)} className="list-group-item">

      <div className="video0list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl}/>
          </div>
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>

    </li>
  );
};

export default VideoListItem;
