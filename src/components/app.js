import React, {Component, Fragment} from 'react';
import SearchBar from './SearchBar/SearchBar';
import VideoDetails from './VideoDetail/VideoDetail';
import VideoList from './VideoList/VideoList';
import VideoListItem from './VideoListItem/VideoListItem';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <SearchBar/>
                <VideoDetails/>
                <VideoList/>
            </Fragment>
        );
    };
};
