import React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import '../styles/Search.css';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.onSearchChange(e.target.value);
    }

    handleSubmit(e) {
        this.props.onSubmitChange(e);
    }

    render() {
        const isLoading = this.props.isLoading;
        return (
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
        )
    }
};

export default Search;
