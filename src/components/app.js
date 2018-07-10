import _ from 'lodash';
import React, {Component, Fragment} from 'react';
import SearchBar from './SearchBar/SearchBar';
import VideoDetails from './VideoDetail/VideoDetail';
import VideoList from './VideoList/VideoList';
import YTSearch from 'youtube-api-search';

import './App.scss';

const API_KEY = 'AIzaSyDPFqy074OeOEfOV0AThPGeNo7pjTNFrMc';

export default class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    componentDidMount() {
        this.videoSearch('surfboards')
    };

    videoSearch = (term) => {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0],
            })
        });
    };

    handleVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo })
    };


    render() {

        const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 500);

        return (
            <Fragment>
                <SearchBar
                    handleSearchingInput={ videoSearch }
                />
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
