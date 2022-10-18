import React from "react";

const Recipe=({tittle,calories,image,ingredients})=>{
    return(
        <div>
            <h1>{tittle}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
            <ol>
                 {ingredients.map(ingredient =>(
                     <li>{ingredient.text}</li>
                 ))}
            </ol>
        </div>
    )
}
export default Recipe;