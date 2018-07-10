import React, {Component, Fragment} from 'react';
import SearchBar from './SearchBar/SearchBar';
import VideoDetails from './VideoDetail/VideoDetail';
import VideoList from './VideoList/VideoList';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDPFqy074OeOEfOV0AThPGeNo7pjTNFrMc';

export default class App extends Component {
    state = {
        videos: [],
    };

    componentDidMount(){
        YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => this.setState({ videos  }));
    };

    render() {
        return (
            <Fragment>
                <SearchBar/>
                <VideoList
                    videos={this.state.videos}
                />
                <VideoDetails/>
            </Fragment>
        );
    };
};
