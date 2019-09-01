import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './style.css';
import {localRecipes} from './tempList';
import "core-js/stable";
import "regenerator-runtime/runtime";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class Index extends Component{
   
     state = {
         alt:localRecipes,  
         url:"https://www.food2fork.com/api/get?key=bbdf4b18758a4bccc790efded3977235",
         details_id:35382
         // details_id:`${localRecipes.recipe_id}`
      };
    
   // async getRecipes(){
   //     try { 
   //       const rawData = await fetch(this.state.url);
   //       const jsonData = await rawData.json();
   //       this.setState({
   //          alt:jsonData.recipes
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
                    {/* <RecipeList stella={this.state.alt} /> */}
                    <RecipeDetails id={this.state.details_id}/>    
            </React.Fragment>
         );
    }
}

ReactDOM.render(<Index />, document.getElementById('app'))
