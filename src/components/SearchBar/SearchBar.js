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
            <div className="col-md-12 search-bar">
                <input
                    type="text"
                    value={this.state.term}
                    onChange={this.handleInput}
                />
            </div>
        )
    };
};

export default SearchBar;