import axios from "axios";
import {useState} from 'react'

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',
    },
    headers: {
      'X-RapidAPI-Key': '1f07f3caffmshea7db3e1a3bde66p112065jsn60556da8cc2c',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


  
    const fetchRecipes = async(searchTerm) => {
        console.log(searchTerm, "in the recipes")
        setLoading(true);
        setRecipes(null);
        setError(null);
      try {
        const reqOptions = {...options}
        if(searchTerm){
            reqOptions.params.q = searchTerm
        }
        const response = await axios.request(reqOptions);
        setRecipes(response.data.results);
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    };

    return [fetchRecipes, {data: recipes, loading, error}];
}

export default useFetchRecipes;