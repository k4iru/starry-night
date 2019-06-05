import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Container from 'react-bootstrap/Container';
import './App.css';


function simulateAPICall() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

class App extends React.Component {
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
        this.setState({
            search: e
        })
    }

    submitHandler(e) {
        this.setState({isLoading: true}, () => {
            simulateAPICall().then(() => {
                this.setState({ isLoading: false });
            })
        });

        /*
        fetch("/call")
            .then(res => res.json())
            .then(
                (json) => {
                    this.setState({ 
                        response: json.data
                    });
                    console.log(this.state.response);
                    console.log("test");
                },
                (err) => {
                    Error(err)
                }
          
         ) */
        console.log("test");
        console.log(this.state.search);
        e.preventDefault();

    }

    componentDidMount() {
        /*
        fetch("/call")
            .then(res => res.json())
            .then(
                (json) => {
                    this.setState({ 
                        response: json.data
                    });
                    console.log(this.state.response);
                    console.log("test");
                },
                (err) => {
                    Error(err)
                }
            )
            */
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="App">
                {/* first view */}
                <Container className="first-view">
                    <div className="spacer" />
                    <Search 
                        onSearchChange={this.searchHandler} 
                        onSubmitChange={this.submitHandler}
                        isLoading={this.state.isLoading}
                    />
                </Container>

                <Container className="second-view">
                    <div>
                        <p>test</p>
                    </div>
                </Container>
            </div>
        );
    }
}

export default App;
