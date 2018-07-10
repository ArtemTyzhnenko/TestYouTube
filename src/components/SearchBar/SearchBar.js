import React, { Component } from 'react';

class SearchBar extends Component{
    state = {
        term: '',
    };

    handleInput = (term) => {
        const {handleSearchingInput} = this.props;
        this.setState({ term });
        handleSearchingInput(term);
    };

    render(){
        return(
            <div className="col-md-12 search-bar">
                <input
                    type="text"
                    value={this.state.term}
                    onChange={ event => this.handleInput(event.target.value)}
                />
            </div>
        )
    };
};

export default SearchBar;