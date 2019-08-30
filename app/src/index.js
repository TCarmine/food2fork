import React, { Component } from 'react'

import './index.css';

class App extends Component{
    render(){
        return(
            <React.Fragment>
                Hello World from Index
                
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
