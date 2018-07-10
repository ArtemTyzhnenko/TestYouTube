import React, { Component } from 'react';
import VideoListItem from './../VideoListItem/VideoListItem';

const VideoList = ({ videos }) =>{
    const videoItems = videos.map( video => <VideoListItem key={video.etag} video={video}/>);
    return(
        <div>
            <ul className="col-md-4 list-group">
                { videoItems }
            </ul>
        </div>
    )
};

export default VideoList;