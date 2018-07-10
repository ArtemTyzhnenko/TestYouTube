import React  from 'react';
import VideoListItem from './../VideoListItem/VideoListItem';

const VideoList = ({ videos, handleVideoSelect }) =>{
    const videoItems = videos.map( video => {
       return (
           <VideoListItem
               handleVideoSelect={handleVideoSelect}
               key={video.etag}
               video={video}
           />)
    });
    return(
        <div>
            <ul className="col-md-4 list-group">
                { videoItems }
            </ul>
        </div>
    )
};

export default VideoList;