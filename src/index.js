import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
const API_KEY = 'AIzaSyDw-UIFDz1-u4kmryuIqck_IAAF84ksV3c';


const App = () => {
  return (<div>
    <SearchBar />
  </div>);
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
