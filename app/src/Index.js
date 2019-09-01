import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './style.css';
import {recipes} from './tempList';
import "core-js/stable";
import "regenerator-runtime/runtime";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class Index extends Component{
<<<<<<< Updated upstream
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
=======
   
     state = {
         alt:localRecipes,  
         url:"https://www.food2fork.com/api/get?key=bbdf4b18758a4bccc790efded3977235",
         details_id:35387
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
>>>>>>> Stashed changes
  
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

ReactDOM.render(<Index />, document.getElementById('app'))
