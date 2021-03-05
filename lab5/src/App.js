import { useState } from "react"
import Search from "./components/Search"
import Color from "./components/Color"
import Check from "./components/Check"

function App() {

  const [loggedin, setLoggedin] = useState(false)
  const [search, setSearch] = useState("")

  return (
    <div>
      {
      (loggedin == false) ? (
        <div>
        <p>Please enter your first name or username</p>
        <input type="text" onChange={(event) => {
                setSearch(event.target.value);
            }} />
            <button onClick={() => setLoggedin(search)
            }>Search</button>
            {
                <p>Username: {search}</p>
            }
        </div>
      ) : 
      (
      <div>
        <h1>Welcome, {search} !</h1>
        <p>Search for <strong>haunter</strong>, in the pokedex</p>
        
      <Search/>
      <Color />
      <Check />
      </div>
      )
      }
      
    </div>

  );
}

export default App;
