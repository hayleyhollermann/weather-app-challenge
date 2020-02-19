import React from 'react';
import { Input, Button} from '@material-ui/core';

function SearchBar() {
  return (
    <div className="SearchBar">
        <h1>Find Your City!</h1>
        <Input/>
        <Button>Go</Button>
    </div>
  );
}

export default SearchBar;