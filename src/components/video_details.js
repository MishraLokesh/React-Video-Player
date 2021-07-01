import React from 'react';

const VideoDetails = ({video}) => {
  if (!video) return <div><h1>Loading...</h1></div>
  const videoId = video.id.videoId;
  // const url = "https://youtube.com/embed/" + videoId;
  const url = `https://youtube.com/embed/${videoId}`;
 
  return (
    <div className='video-detail col-md-8' >
      <div className='embedd-responsive embed-responsive-16by9'>
        <iframe className='embedd-responsive-item' src={url} style={{width : 100 + '%', height : 500 +'px'}}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div> <br/>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetails;

