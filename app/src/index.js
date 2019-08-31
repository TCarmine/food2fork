import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './style.css';
import {recipes} from './tempList';
import "core-js/stable";
import "regenerator-runtime/runtime";

class App extends Component{
    state = {
        url:"https://www.food2fork.com/api/search?key=bbdf4b18758a4bccc790efded3977235",
        recipes:[]  
    };
    async getRecipes(){
       try{ 
         const data = await fetch(this.state.url);
         const jsonData = await data.json();
         this.setState({
            recipes:jsonData.recipes
         });
       } catch (error){
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
