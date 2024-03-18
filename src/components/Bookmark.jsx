import PropTypes from "prop-types";

const Bookmark = ({ bookmark, idx, deleteBookmark, cookingBookmark, handleCookingTime }) => {

    
  return (


    <tr className="">
      <th>{idx + 1}</th>
      <td>{bookmark.recipe_name}</td>
      <td>{bookmark.preparing_time} </td>
      <td>{bookmark.calories} </td>
      <td>
      <button
  onClick={(event) => {
    event.preventDefault();
    deleteBookmark(bookmark.recipe_id);
    cookingBookmark(bookmark);
  }}
  className="bg-[#0BE58A] py-2 px-2 font-medium rounded-2xl my-4"
>
  Preparing
</button>
      </td>
    </tr>
  );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
    
};

export default Bookmark;
