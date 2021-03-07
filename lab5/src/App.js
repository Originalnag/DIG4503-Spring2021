import { useState } from "react"
import Search from "./components/Search"
import Color from "./components/Color"
import Check from "./components/Check"

function App() {

  const [loggedin, setLoggedin] = useState(false)
  const [name, setName] = useState("")

  return (
    <div>
      {
      (loggedin == false) ? (
        <div>
        <p>Please enter your first name or username</p>
        <input type="text" onChange={(event) => {
                setName(event.target.value);
            }} />
            <button onClick={() => setLoggedin(name)
            }>Login</button>
            {
                <p>Username: {name}</p>
            }
        </div>
      ) : 
      (
      <div>
        <button onClick={() => setLoggedin(false)
            }>Logout</button>
        <h1>Welcome, {name} !</h1>
        <p>Search for <strong>haunter</strong>, in the pokedex</p>
      <Search/>
      <Color />
      <Check />
      </div>
      )
      }
      <div>
      </div>
      
    </div>

  );
}

export default App;
