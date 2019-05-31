import React, { Component, Fragment }from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import '../styles/Search.css';

const list = 
    [
        "Torrance Barrens",
        "McDonald Park",
        "Cypress Hills Inter-Provincial Park",
        "Point Pelee National Park",
        "Beaver Hills and Elk Island National Park"]

class Search extends React.Component {

    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };

    static defaultProps = {
        suggestions: []
    };

    constructor(props) {
        super(props);

        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        const suggestions = list;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter( suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick(e) {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    }

    handleChange(e) {
        this.props.onSearchChange(e.target.value);
    }

    handleSubmit(e) {
        this.props.onSubmitChange(e);
    }

    render() {

        let suggestionsListComponent;
        let isLoading = this.props.isLoading;

        if (this.state.showSuggestions && this.state.userInput) {
            if(this.state.filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul class="suggestions">
                        {this.state.filteredSuggestions.map((suggestion, index) => {
                            let className;

                            if (index === this.state.activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <li 
                                    className={className}
                                    key={suggestion}
                                    onClick={this.onClick}
                                >
                                    {suggestion}
                                </li>
                            );
                        })};
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="no-suggestions">
                        <em>No suggestions</em>
                    </div>
                );
            }
        }

        return (
            <div>
            <Fragment>
                <input
                    type="text"
                    onChange={this.onChange}
                    value={this.state.userInput}
                />
                {suggestionsListComponent}
            </Fragment>
            <div id="search-form">
                <input className="search-field"
                    type="text" 
                    value={this.props.value} 
                    onChange={this.handleChange}/>
                <Button 
                    className="button"
                    variant="dark"
                    disabled={isLoading}
                    onClick={!isLoading ? this.handleSubmit : null}
                >{isLoading ? 
                        <Spinner 
                            animation="border" 
                            role="status"
                            size="sm" /> : 'Search'}
                    </Button>
                </div>
            </div>
        )
    }
};

export default Search;
