import Header from "./components/Header";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./components/Recipe";
import Bookmark from "./components/Bookmark";
import Cookbookmark from "./components/Cookbookmark";

function App() {
  const [items, setItems] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  
  const [cookBookmark, setCookBookmark] = useState([]);
  

      
    



  useEffect(() => {
    fetch("./recipe.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

const bookmarkItem = (item) =>{
 const isExist = bookmark.find((bm) => bm.recipe_id == item.recipe_id);
 if(!isExist){
  setBookmark([...bookmark, item])
 }else{
  swal.fire({
    title: "This item already in Bookmark",
    text: "You can not added multiple item",
    icon: "info" // You can use icons like "success", "error", etc.
  });
 }
  
}
const deleteBookmark = (id) =>{
  const newBookmark = bookmark.filter(item => item.recipe_id != id)
  setBookmark(newBookmark)
    
}
const cookingBookmark = (item) =>{
  setCookBookmark([...cookBookmark,item])
 
}


  

  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <Header></Header>

        <div className="text-center p-20">
          <h1 className=" text-5xl text-[#150B2B] font-semibold mb-4">
            Our Recipes
          </h1>
          <p className="text-[#150B2B60]">
          Food recipes are like roadmaps, guiding you on a journey towards culinary creativity. <br />Cooking from scratch allows you to control ingredients and personalize your dishes.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between  gap-6">
          {/* left content  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full lg:w-[60%]">
            {items.map((item) => (
              <Recipe key={item.recipe_id} item={item}  bookmarkItem={bookmarkItem} ></Recipe>
            ))}
          </div>

          {/* right content  */}
          <div className="w-full lg:w-[40%]">
            {/* table one  */}
            <div className="top-bookmark border-[#28280420] border py-6">
              <h1 className="text-xl font-medium text-center mb-4">
                Want To Cook <span>{bookmark.length}</span>
              </h1>
              <table className="table">
                {/* head */}
                <thead className="thead">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Times</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody className="">
                  {/* row 1 */}
                  {
                    bookmark.map((bk, idx) => <Bookmark idx={idx} key={idx} bookmark={bk} deleteBookmark={deleteBookmark} cookingBookmark={cookingBookmark}></Bookmark>)
                  }
                </tbody>
              </table>
            </div>

            {/* bottom bookmark  */}
            <div className="bottom-bookmark border-[#28280420] border py-6 mt-6">
              <h1 className="text-xl font-medium text-center mb-4">
                Currently Cooking <span>{cookBookmark.length}</span>
              </h1>
              <table className="table">
                {/* head */}
                <thead className="thead">
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Times</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody className="">
                  {/* row 1 */}
               
                {
                  cookBookmark.map((item, idx) => <Cookbookmark  key={idx} idx={idx} bookmark={item}></Cookbookmark>
                  )
                }
              
                  <tr>
                    <td></td>
                    <td></td>
                    <th>Total Times=  <span><br /></span>  0 </th>
                    <th>Total Calories=   <span><br /></span> 0 Caories</th>
                    
                  </tr>
                

                </tbody>
              </table>
            </div>


            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
