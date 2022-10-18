import React,{useEffect,useState} from "react";
import './App.css';
import Recipe from "./Recipe.js";

const App = () =>{
  const ADD_ID="361544fb";
  const ADD_KEY="c3bff0221d2f397692ef80881be0ed97";
  const [query , setQuery] = useState('chiken');
  const [recepies , setRecepies] = useState([]); 
  const [search , setSearch]=useState('');

  useEffect(() => {
  getRecepies();
  console.log("hehe")
  }, [query]);
  
 const getRecepies= async()=>{
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ADD_ID}&app_key=${ADD_KEY}`);
    const data= await response.json();
    setRecepies(data.hits);
    console.log(data.hits);
  };

 const getSearch = e =>{
       e.preventDefault();
       setQuery(search);
       setSearch("");
 };

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search)
  };

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input onChange={updateSearch} className="search-bar" type="text" value={search}/>
        <button className="search_button" type="submit">Search</button> 
        {recepies.map(recepie =>(<Recipe ingredients={recepie.recipe.ingredients} key={recepie.recipe.label} tittle={recepie.recipe.label} calories={recepie.recipe.calories} image={recepie.recipe.image}/>))};
      </form>
    </div>

  );
}

export default App;
