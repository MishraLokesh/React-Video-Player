import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    
    YTsearch({key: APIkey, term: 'windows'}, (videos) => {
      // this.setState({videos: videos});
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      });
    });
  } 

  render () {
    return (
      <div>
        <SearchBar />
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


