import React, { Component } from 'react';
import { Input, Button} from '@material-ui/core';

class SearchBar extends Component {

  state = {
    location: '',
  }

  setLocation = (event) => {
    this.setState({location: event.target.value})
  }

  getWeather = () => {
    console.log('getting weather for', this.state.location);
  }
    
  render() {
    return (
      <div className="SearchBar">
          <h1>Find Your City!</h1>
          <Input onChange={this.setLocation}/>
          <Button onClick={this.getWeather}>Go</Button>
          {JSON.stringify(this.state, null, 2)}
      </div>
    );
  }

}

export default SearchBar;