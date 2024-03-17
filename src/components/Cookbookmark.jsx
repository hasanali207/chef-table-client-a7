
import PropTypes from 'prop-types';

const Cookbookmark = ({ bookmark, idx }) => {
       const {recipe_name, preparing_time, calories } = bookmark
        
    
    
    return (
        <tr className="">
        <th>{idx + 1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time} Minutes</td>
        <td>{calories} Clories</td>
        <td>
        <button
        
    className="bg-[#0BE58A] py-2 px-2 font-medium rounded-2xl my-4"
  >
    Prepared
  </button>
        </td>
      </tr>
    );
};

Cookbookmark.propTypes = {
    
};

export default Cookbookmark;