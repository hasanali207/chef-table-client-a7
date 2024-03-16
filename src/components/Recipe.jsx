import PropTypes from "prop-types";
import { GoClock } from "react-icons/go";


const Recipe = ({ item }) => {
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = item;

  return (
    
      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          
        </div>
       <div className="p-4">
       <div className="border-y-2 py-3">
          <h3 className="text-3xl font-normal mb-3">
            Ingredient {ingredients.length}
          </h3>
          {ingredients.map((ingredientsItem, idx) => (
            <li className="ml-2" key={idx}>
              
              {ingredientsItem}
            </li>
          ))}
        </div>
       </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="flex justify-center items-center gap-2"> <GoClock></GoClock> {preparing_time} Minutes</h3>
            <h3>{calories} Calories</h3>
          </div>
            
            <div className="flex justify-center items-center"> 
            <button className="btn btn-primary my-4">Want to Cook</button>
            </div>
          </div>
      </div>
    
  );
};

Recipe.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Recipe;
