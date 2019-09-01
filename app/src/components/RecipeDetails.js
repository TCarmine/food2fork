import React, { Component } from 'react';
import { recipe } from '../tempDetails';
// import { localRecipes } from '../tempList';

export default class RecipeDetails extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            recipe:recipe,
            url:`https://www.food2fork.com/api/get?key=bbdf4b18758a4bccc790efded3977235&rId=35382=${this.props.id}`
        }
    }
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
    async componentDidMount(){
      try { 
          const rawData = await fetch(this.state.url);
          const jsonData = await rawData.json();
          this.setState({
                recipe:jsonData.recipe
          });
      } catch (error){
            console.log(error);
      }
    }  
    render() {
        console.log(recipe);
       // prop destructuring
       const {
           image_url, 
           publisher,
           publisher_url,
           source_url,
           title,
           ingredients
        } = this.state.recipe;
        console.log(ingredients);
        return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <button type="button" className="btn btn-warning mb-5 text-capitalize">
                        back to recipe list
                    </button>
                    <img src={recipe.image_url} 
                          className="d-block w-100" 
                          alt="recipe" />
                </div>
                {/* details */}
                <div className="col-10 mx-auto col-md-6 my-3">
                    <h6 className="text uppercase">{title}</h6>
                    <h6 className="text-warning text-capitalize text-slanted">provided by {publisher}</h6>
                    <a href={publisher_url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-2 text-capitalize">
                        publisher webpage
                    </a>
                    <a href={source_url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success mt-2 mx-3 text-capitalize">
                        recipe url
                    </a>
                    <ul className="list-group mt-4">
                        <h2 className="mt-3 mb-4">ingredients</h2>
                        {recipe.ingredients.map((item, index) => {
                            return(
                                <li key={index} className="list-group-item 
                                text-slanted">
                                       {item}
                                </li>
                            );    
                        })}
                    </ul>
                </div>
              </div>
            </div>
        </React.Fragment>
            )
        }
}
