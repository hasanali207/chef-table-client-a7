import Bookmark from "./components/Bookmark"
import Header from "./components/Header"
import Recipe from "./components/Recipe"

function App() {
 

  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
      <Header></Header>
      <div>
        <Recipe></Recipe>
        <Bookmark></Bookmark>
      </div>
      </div>
    </>
  )
}

export default App
