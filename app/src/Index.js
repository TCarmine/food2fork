import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './style.css';
import {recipes} from './tempList';
import "core-js/stable";
import "regenerator-runtime/runtime";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class Index extends Component{
   constructor(){
     super();
     this.state = {
         recipes:[recipes],  
         url:"https://www.food2fork.com/api/search?key=bbdf4b18758a4bccc790efded3977235"
      };
   }   
   // async getRecipes(){
   //     try { 
   //       const rawData = await fetch(this.state.url);
   //       const jsonData = await rawData.json();
   //       this.setState({
   //          recipes:jsonData.recipes
   //       });
   //     } catch (error){
   //        console.log(error);
   //     }
   //  }
  
   //  componentDidMount(){
   //      this.getRecipes();
   //  }   
    render(){
      // console.log(this.state.recipes);
         return(
            <React.Fragment>
                    <RecipeList recipes={this.state.recipes} />
                   { }
                      
                    <RecipeDetails />    
            </React.Fragment>
         );
    }
}

ReactDOM.render(<Index />, document.getElementById('app'))
