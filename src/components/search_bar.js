import React, {Component} from 'react';

// Functional Component
// const SearchBar = () => {
//   return <input />
// };

// Class Based Component
// class SearchBar extends React.Component {
//   render () {
//     return <input />;
//   }
// }


// class SearchBar extends Component {
//   render () {
//     return <input onChange={this.onChange} />;
//   }

//   onInputChange(event) {
//     console.log(event.target.value);
//   }
// }


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state={term: ''};
  }

  render () {
    return (
    <div> 
      <input onChange={event => this.setState({term: event.target.value})} />
      <br/><br/>
      {/* <br/> The value of the input is: {this.state.term}  */}
    </div>
    );
  }
}



export default SearchBar;





