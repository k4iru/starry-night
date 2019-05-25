import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null 
        };
    }

    componentDidMount() {
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
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className="App">
                <Header />
            </div>
        );
    }
}

export default App;
