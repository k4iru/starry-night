import React, { Component, Fragment }from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Popover from 'react-bootstrap/Popover';
import '../styles/Search.css';

const list = 
    [
        "Torrance Barrens Dark Sky Preserve",
        "McDonald Park",
        "Cypress Hills Inter-Provincial Park",
        "Point Pelee National Park",
        "Beaver Hills Dark Sky Preserve"
    ]

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

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
    }

    onChange(e) {
        this.props.onSearchChange(e.currentTarget.value);
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
        this.props.onSearchChange(e.currentTarget.innerText);
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    }

    _onFocus() {
        if (!this.state.showSuggestions) {
            this.setState({
                showSuggestions: true
            });
        }
    }

    _onBlur() {
        setTimeout(() => {
            if (this.state.showSuggestions) {
                this.setState({
                    showSuggestions: false
                });
            }
        }, 0);
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
                    <ul className="suggestions">
                        {this.state.filteredSuggestions.map((suggestion, index) => {
                            let className;

                            if (index === this.state.activeSuggestion) {
                                className = "suggestion-active";
                            }

                            return (
                                <li 
                                    className="suggestion-item"
                                    key={suggestion}
                                    onClick={this.onClick}
                                >
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        <li><em>No suggestions</em></li>
                    </ul>
                );
            }
        }

        return (
            <div id="search-form">
                <Fragment>
                    <input className="search-field"
                        type="text"
                        onChange={this.onChange}
                        value={this.state.userInput}
                        onFocus={this._onFocus}
                        onBlur={this._onBlur}
                    />
                    {suggestionsListComponent}
                </Fragment>
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
        )
    }
};

export default Search;
