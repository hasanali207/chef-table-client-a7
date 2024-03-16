import Header from "./components/Header";

import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./components/Recipe";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("./recipe.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  

  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <Header></Header>
        <div className="flex justify-between ">
          {/* left content  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-2/3 ">
          {
            items.map(item => <Recipe key={item.recipe_id} item={item}></Recipe>)
          }
          </div>

          {/* right content  */}
          <div className="w-1/3">
            <h1>this is heading</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
