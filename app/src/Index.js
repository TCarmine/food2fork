import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './style.css';
import { localRecipes } from './tempList';
import "core-js/stable";
import "regenerator-runtime/runtime";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class Index extends Component{

   state = {
      recipes:localRecipes,  
      url:"https://www.food2fork.com/api/get?key=bbdf4b18758a4bccc790efded3977235",
      base_url:"https://www.food2fork.com/api/get?key=bbdf4b18758a4bccc790efded3977235",
      details_id:35375,
      pageIndex:1,
      search:"",
      query:'&q='
      // details_id:`${localRecipes.recipe_id}`
   }; 
 
    
   async getRecipes(){
       try { 
         const rawData = await fetch(this.state.url);
         const jsonData = await rawData.json();
         this.setState({
            alt:jsonData.localRecipes
         });
       } catch (error){
          console.log(error);
       }
    }
   //  componentDidMount(){
   //      this.getRecipes();
   //  }   

    displayPage = (index) =>{
       switch(index){
          default:
             case 1:
               return(<RecipeList recipelist={this.state.recipes} 
               handleDetails={this.handleDetails}
               value={this.state.search}
               handleChange={this.handleChange}
               handleSubmit={this.handleSubmit}
               />)
             case 0:
               return(<RecipeDetails 
                  id = {this.state.details_id} 
                  
                  handleIndex = {this.handleIndex}
                  /> 
               ) 

       }
    };
    
    handleIndex = index =>{
       this.setState({
          pageIndex:index
       })
    };

    handleDetails = (index,id)=>{
       this.setState({
          pageIndex:index,
          details_id:id
       });
    };

    handleChange = (e)=>{
       this.setState(
          {
             search:e.target.value
          },
          ()=>{
            console.log(this.state.search);
          }
       );
    }; 
    handleSubmit = e =>{
        e.preventDefault();
        const{base_url,query,search}=this.state;

         this.setState(()=>{
            return{url:`${base_url}${query}${search}`,search:""}
         },()=>{
            this.getRecipes();
         })
    };
    render(){
      // console.log(this.state.recipes);
         return(
            <React.Fragment>
                 {this.displayPage(this.state.pageIndex)}                    
            </React.Fragment>
         );
    }
}

ReactDOM.render(<Index />, document.getElementById('app'))
