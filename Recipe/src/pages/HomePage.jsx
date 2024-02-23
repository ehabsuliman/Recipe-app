import CardList from "../components/CardList"
import Header from "../components/Header"
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";
import { useEffect } from "react";


export default function HomePage() {

  const [fetchRecipes, {data, loading, error}] = useFetchRecipes()

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      fetchRecipes(searchTerm);
    }
  };

  return (
    <>
      <Header handleSearch={handleSearch}/>
      {loading && <Loading/> }
      {data && <CardList recipes={data}/>}
      {error && <p>{error}</p>}
    </>
    );
}