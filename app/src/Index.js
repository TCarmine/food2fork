import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './style.css';
import { recipes } from './tempList';
import "core-js/stable";
import "regenerator-runtime/runtime";
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

class Index extends Component{

   state = {
      recipes:recipes,  
      url:"https://www.food2fork.com/api/get?key=49e68498e620e17c8a260b2053c71318 ",
      base_url:"https://www.food2fork.com/api/get?key=49e68498e620e17c8a260b2053c71318 ",
      details_id:35389,
      pageIndex:1,
      search:"",
      query:'&q='
      // details_id:`${localRecipes.recipe_id}`
   }; 
 
    
   async getRecipes() {
      try {
        const data = await fetch(this.state.url);
        const jsonData = await data.json();
        console.log(jsonData);
        if (jsonData.recipes.length === 0) {
          this.setState(() => {
            return { error: "sorry, but your search did not return any results" };
          });
        } else {
          this.setState(() => {
            return { recipes: jsonData.recipes, error: "" };
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  
    componentDidMount() {
      this.getRecipes();
    }
  
    displayPage = index => {
      switch (index) {
        default:
        case 1:
          return (
            <RecipeList
              recipes={this.state.recipes}
              handleDetails={this.handleDetails}
              value={this.state.search}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              error={this.state.error}
            />
          );
        case 0:
          return (
            <RecipeDetails
              id={this.state.details_id}
              handleIndex={this.handleIndex}
            />
          );
      }
    };
  
    handleIndex = index => {
      this.setState({
        pageIndex: index
      });
    };
    handleDetails = (index, id) => {
      this.setState({
        pageIndex: index,
        details_id: id
      });
    };
    handleChange = e => {
      this.setState(
        {
          search: e.target.value
        },
        () => {
          // console.log(this.state.search);
        }
      );
    };
    handleSubmit = e => {
      e.preventDefault();
      const { base_url, query, search } = this.state;
      this.setState(
        () => {
          return { url: `${base_url}${query}${search}`, search: "" };
        },
        () => {
          this.getRecipes();
        }
      );
    };
  
    render() {
      return (
        <React.Fragment>{this.displayPage(this.state.pageIndex)}</React.Fragment>
      );
    }
  }


ReactDOM.render(<Index />, document.getElementById('app'))
