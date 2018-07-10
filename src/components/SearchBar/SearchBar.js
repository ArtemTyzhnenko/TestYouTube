import React, { Component } from 'react';

class SearchBar extends Component{
    state = {
        term: '',
    };
    handleInput = (event) => {
        return this.setState({ term: event.target.value })
    };

    render(){
        return(
            <input
                type="text"
                value={this.state.term}
                onChange={this.handleInput}
            />
        )
    };
};

export default SearchBar;