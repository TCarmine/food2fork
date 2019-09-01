import React, { Component } from 'react';
<<<<<<< Updated upstream
import {recipes} from '/home/ca/Desktop/code/food2fork/app/src/tempDetails.js';


export default class RecipeDetails extends Component {
    render() {
        return (
    <React.Fragment>
        <h1>hello From Details</h1>
    </React.Fragment>
        )
=======
import { recipeDetails } from '../tempDetails';
import { localRecipes } from '../tempList';


export default class RecipeDetails extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            recipe:recipeDetails,
            url:`https://www.food2fork.com/api/get?key=bbdf4b18758a4bccc790efded3977235&rId=35382=${this.props.id}`
            // id:`https://www.food2fork.com/api/get?key=bbdf4b18758a4bccc790efded3977235&rId=35382=${this.props.id}`
        };
    }

    async componentDidMount(){
        try { 
         const rawData = await fetch(this.state.url);
         const jsonData = await rawData.json();
         this.setState({
            recipe:jsonData
         } catch (error){
          console.log(error);
       }
    }  
    render() {
       
       // prop destructuring
       const{
           image_url, 
           publisher,
           publisher_url,
           source_url,
           title,
           ingredients
        } = this.state.recipe;
        // console.log(ingredients);
        return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <button type="button" className="btn btn-warning mb-5 text-capitalize">
                        back to recipe list
                    </button>
                    <img src={image_url} 
                          className="d-block w-100" 
                          alt="recipe"/>
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
                        {
                            recipe.map((items)=>{
                               return(
                                   <li className="list-group-item text-sland" key={id}>
                                       {items}
                                   </li>
                               )
                            })
                        }
                    </ul>
                </div>
                </div>
            </div>
        </React.Fragment>
            )
        }
>>>>>>> Stashed changes
    }
}
