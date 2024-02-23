export default function RecipeNutritionalFact ({fact}) {

    const {Icon} = fact;

    return(
        <div className="recipe-fact-container">
            <Icon/>
            <h3>{fact.amount}</h3>
            <p>{fact.category}</p>
        </div>
    );
 }