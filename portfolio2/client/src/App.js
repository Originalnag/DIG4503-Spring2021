import Put from "./components/Put"
import Patch from "./components/Patch"
import Get from "./components/Get"
import Delete from "./components/Delete"
import Test from "./components/Test"
import "./App.css"
// import Test from "./components/Test"

function App() {

  return (
    <div class = "Box2">
     <h2>Find the Pokemon</h2>
       <Test/>
      <h2>Add an Anime</h2>
     <Put/>
     <h2>Find an Anime</h2>
     <Get/>
     <h2>Update an Anime</h2>
     <Patch/>
     <h2>Delete an Anime</h2>
     <Delete/>
   
      </div>
     
      

  );
}

export default App;
