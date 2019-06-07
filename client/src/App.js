import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Container from 'react-bootstrap/Container';
import './App.css';


class App extends React.Component {

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
        this.setState({
            search: e
        })
    }

    submitHandler(e) {
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
                    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
                })
        });
        e.preventDefault();

    }

    componentDidMount() {
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
                        <p ref={(el) => {this.messagesEnd = el; }} >test</p>
                    </div>
                </Container>
            </div>
        );
    }
}

export default App;
