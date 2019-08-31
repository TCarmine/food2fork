import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import './index.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class App extends Component{
    state = {
        url:"https://www.food2fork.com/api/search?key=bbdf4b18758a4bccc790efded3977235",
        recipes:[]  
    };
    async getRecipes(){
       try{ const daterep = await fetch(this.state.url);
         const jsonData = await data.json();
         this.setState({
            recipes:jsonData.recipes
         });
       }
       catch (error){
          console.log(error);
       }
    }
  
    componentDidMount(){
        this.getRecipes()
    }   
    render(){
       console.log(this.state.recipes);
         return(
            <React.Fragment>
                    <RecipeList />
                                   
                    <RecipeDetails />    
            </React.Fragment>
         );
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
