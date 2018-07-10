import React, {Component, Fragment} from 'react';
import SearchBar from './SearchBar/SearchBar';
import VideoDetails from './VideoDetail/VideoDetail';
import VideoList from './VideoList/VideoList';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDPFqy074OeOEfOV0AThPGeNo7pjTNFrMc';

export default class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    componentDidMount() {
        YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            })
        });
    };

    handleVideoSelect = (selectedVideo) => {
        this.setState({selectedVideo})
    };

    render() {
        return (
            <Fragment>
                <SearchBar/>
                <VideoDetails
                    video={this.state.selectedVideo}
                />
                <VideoList
                    handleVideoSelect={this.handleVideoSelect}
                    videos={this.state.videos}
                />

            </Fragment>
        );
    };
};
