import React, {Component} from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  const imageURL = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video) } className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className='media-object' src={imageURL}/>
        </div>
        <div className='media-left'>
          <div className='media-heading'>{videoTitle}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;


