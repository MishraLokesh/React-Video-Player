import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
// const dotenv = require('dotenv');
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import YTsearch from 'youtube-api-search';

// console.log(process.env);
// const APIkey = process.env.REACT_APP_YT_API;
const APIkey = 'AIzaSyBXrNexuFYAbDH3_JTfoeuk4if5puSwpHo';
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
    this.state={
      videos: [],
      selectedVideo: null
    };
  }


  videoSearch (term) {
    YTsearch({key: APIkey, term: term}, (videos) => {
      // this.setState({videos: videos});
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      });
    });
  } 

  render () {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetails video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
        {console.log(this.state.videos)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));


