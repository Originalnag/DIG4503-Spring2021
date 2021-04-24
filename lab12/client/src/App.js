import Put from "./components/Put"
import Get from "./components/Get"
import Delete from "./components/Delete"

function App() {
  return (
    <div className="App">
      <strong><p>Add a Book to the collection</p></strong>
      <Put />
      <hr></hr>
      <strong><p>Find the Book by typing its ISBN</p></strong>
      <Get />
      <hr></hr>
      <strong><p>Delete the Book by typing its ISBN</p></strong>
      <Delete />
    </div>
  );
}

export default App;
