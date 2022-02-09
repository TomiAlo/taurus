import "./App.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemCount from "./components/ItemCount";


function App() {
  return (
    
    <>
    <NavBar />
    <ItemListContainer />
    {<ItemCount />}
    </>
            
  );
}

export default App;
