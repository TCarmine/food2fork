import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component{
    render(){
        return(
            <React.Fragment>
                    <RecipeList />
                    Hello World from Index
                    <RecipeDetails />    
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
