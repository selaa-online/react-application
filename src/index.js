import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
const API_KEY = 'AIzaSyDw-UIFDz1-u4kmryuIqck_IAAF84ksV3c';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (allVideos) => {
      this.setState({
        videos: allVideos,
        selectedVideo: allVideos[0]
      });
    });
  }
  render() {
    return (<div>
      <SearchBar />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
    </div>);
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
