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
    <div className='search-bar'> 
      <input onChange={event => this.onInputChange(event.target.value)} />
      <br/><br/>
      {/* <br/> The value of the input is: {this.state.term}  */}
    </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}



export default SearchBar;





