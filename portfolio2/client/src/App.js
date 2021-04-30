import Put from "./components/Put"
import Patch from "./components/Patch"
import Get from "./components/Get"
import Delete from "./components/Delete"
import Pokemon from "./components/Pokemon"
import "./App.css"

function App() {

  return (
    <div class = "Box2">
     <h2>Find the Pokemon</h2>
       <Pokemon/>
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
