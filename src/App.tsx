import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        // return (<div className="App">
        //         <h1>Hello World</h1>
        //         <p>This is really working!</p>
        //     </div>
        // )
        return React.createElement('div', {'className': 'App'}, React.createElement('h1', 'Does this work now'))
    }
}

export default App;
