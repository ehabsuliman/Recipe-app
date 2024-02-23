import Card from "./Card";

// export const recipes = [
//     {
//         id: 1,
//         name: "Poke Bowls",
//         image: "https://therecipecritic.com/wp-content/uploads/2022/01/hawaiianpokebowls.jpg",
//         tag: "Romantic Dinner",
//         numberOfMinutes: 50
//     },
//     {
//         id: 2,
//         name: "Sushi",
//         image: "https://tb-static.uber.com/prod/image-proc/processed_images/0c5c571ffdf8efc99390599e34b59193/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg",
//         tag: "Japanese Food",
//         numberOfMinutes: 70
//     },
//     {
//         id: 3,
//         name: "potato",
//         image: "https://assets.annahar.com/ContentFilesArchive/770761Image1.jpg?version=5873299",
//         tag: "Kid Friendly",
//         numberOfMinutes: 25
//     },
//     {
//         id: 4,
//         name: "Creamy Shrimp Pasta",
//         image: "https://therecipecritic.com/wp-content/uploads/2022/01/hawaiianpokebowls.jpg",
//         tag: "Romantic Dinner",
//         numberOfMinutes: 40
//     },
//     {
//         id: 5,
//         name: "Maple Pancakes",
//         image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Maple-Pancakes_EXPS_TOHFM23_9336_DR_09_09_4b.jpg?fit=700,700",
//         tag: "Sweet",
//         numberOfMinutes: 20
//     },
    
// ]


function CardList({recipes}) {
    return(
        <section className='cards'>
          {recipes.map((recipe) => (
            <Card key={recipe.id} recipe={recipe} />
          ))}
        </section>

    );
}

export default CardList;