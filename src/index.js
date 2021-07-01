import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// const dotenv = require('dotenv');
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTsearch from 'youtube-api-search';

// console.log(process.env);
// const APIkey = process.env.REACT_APP_YT_API;
const APIkey = 'AIzaSyBXrNexuFYAbDH3_JTfoeuk4if5puSwpH';
// const App = () => {
//   return (
//   <div>
//     <SearchBar />
//   </div>
//   );
// };

class App extends Component {

  constructor(props) {
    super(props);
    this.state={videos: []};
    
    YTsearch({key: APIkey, term: 'windows'}, (videos) => {
      // this.setState({videos: videos});
      this.setState({ videos: videos });
    });
  } 

  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
        {console.log(this.state.videos)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


