import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
//import logo from './logo.svg';
import Header from './components/Header';
import Forecast from './components/Forecast';
import Search from './components/Search';
import './App.css';


class App extends React.Component {

    // reference for smooth scrolling
    messagesEnd = React.createRef();
    home = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            response: null, 
            search: 'Torrance Barrens Dark Sky Preserve',
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
                        Error(err);
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
        smoothscroll.polyfill();
        let forecast;
        let searchTitle;

        if (this.state.response !== undefined && this.state.response !== null){
            searchTitle = this.state.search;
            forecast = (
                <div className="second-view">
                    <div ref={(el) => {this.messagesEnd = el; }} />

                    <div className="flex-container">

                        <h1 className="searched">{searchTitle}</h1>
                        <Forecast value={this.state.response[0]} />
                        <div className="divider" />
                        <Forecast value={this.state.response[1]} />
                        <div className="divider" />
                        <Forecast value={this.state.response[2]} />
                    </div>
                </div>
            )
        }
        return (
            <div className="App">
                {/* first view */}
                <div className="first-view">
                    <Header />
                    <div className="spacer" />
                    <h1 className="responsive-header">Starry</h1>
                    <div className="spacer" />
                        <Search 
                            onSearchChange={this.searchHandler} 
                            onSubmitChange={this.submitHandler}
                            isLoading={this.state.isLoading}
                        />
                </div>

                {forecast}
                <div className="first-view" id="about">
                    <Header />
                    <h1 className="responsive-header">Starry</h1>
                </div>


            </div>
        );
    }
}

export default App;
