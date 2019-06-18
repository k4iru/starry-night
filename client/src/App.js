import React from 'react';
//import logo from './logo.svg';
import Forecast from './components/Forecast';
import Search from './components/Search';
import Container from 'react-bootstrap/Container';
import './App.css';


class App extends React.Component {

    // reference for smooth scrolling
    messagesEnd = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            response: null, 
            search: '',
            isLoading: false
        };
        this.searchHandler = this.searchHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    searchHandler(e) {

        // update search field as input is typed 
        this.setState({
            search: e
        })
    }

    submitHandler(e) {
        //
        // Search Button has been clicked, set loading to true and perform 
        // api call. parse data and smooth scroll to results
        //

        this.setState({isLoading: true}, () => {
            console.log(this.state.search);
            fetch(`/call?location=${this.state.search}` )
                .then(res => res.json())
                .then(
                    (json) => {
                        this.setState({
                            response: json.data
                        });
                        console.log("testing fetch api");
                        console.log(this.state.response);
                    },
                    (err) => {
                        Error(err)
                    }
                )
                .then(() => {
                    this.setState({ isLoading: false });
                    // only scroll down if search isn't empty 
                    if (this.state.search) {
                        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
                    }
                })
        });

        // prevent the browser from refreshing on search 
        e.preventDefault();

    }

    render() {
        let forecast;
        if (this.state.response !== null){
            forecast = (

                <div className="second-view">
                    <div ref={(el) => {this.messagesEnd = el; }} />
                    <div className="flex-container">

                        <h1 className="searched">{this.state.search}</h1>
                        <Forecast value={this.state.response[0]} />
                        <Forecast value={this.state.response[1]} />
                        <Forecast value={this.state.response[2]} />
                    </div>
                </div>
            )
        }
        return (
            <div className="App">
                {/* first view */}
                <div className="first-view">
                    <div className="spacer" />
                    <Search 
                        onSearchChange={this.searchHandler} 
                        onSubmitChange={this.submitHandler}
                        isLoading={this.state.isLoading}
                    />
                </div>

                    {forecast}
            </div>
        );
    }
}

export default App;
