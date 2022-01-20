import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";


function App() {
  return (
      <div>
        <NavBar />  
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
  );
}


export default App;
