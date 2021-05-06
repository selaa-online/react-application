import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
const API_KEY = 'AIzaSyDw-UIFDz1-u4kmryuIqck_IAAF84ksV3c';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video-list';


class App extends Component {


  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (allVideos) => {
      this.setState({ videos: allVideos });
    });
  }
  render() {
    return (<div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>);
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
