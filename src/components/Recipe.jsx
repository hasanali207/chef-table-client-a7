import PropTypes from "prop-types";
import { GoClock } from "react-icons/go";
import { FaGripfire } from "react-icons/fa6";



const Recipe = ({ item, bookmarkItem }) => {
  
  const {
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = item;

  return (
    
      <div className="card border-[#28280420] border">
        <figure className="px-6 pt-6">
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-3 text-[#282828]">{recipe_name}</h2>
          <p className="text-[#878787]">{short_description}</p>
          
        </div>
       <div className="p-4">
       <div className="border-y-2 py-3">
          <h3 className="text-xl font-medium mb-3">
            Ingredient {ingredients.length}
          </h3>
          {ingredients.map((ingredientsItem, idx) => (
            <li className="ml-2 text-[#878787]" key={idx}>
              
              {ingredientsItem}
            </li>
          ))}
        </div>
       </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="flex justify-center items-center gap-2"> <GoClock></GoClock> {preparing_time} Minutes</h3>
            <h3 className="flex justify-center items-center gap-2" > <FaGripfire></FaGripfire> {calories} Calories</h3>
            
          </div>
            
          <button onClick={() => bookmarkItem(item)}  className=" bg-[#0BE58A] py-3 px-4 font-medium rounded-2xl  my-4">Want to Cook</button>
            
            
          </div>
      </div>
    
  );
};

Recipe.propTypes = {
  item: PropTypes.object.isRequired,
  bookmarkItem: PropTypes.func
};

export default Recipe;
