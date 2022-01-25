import { Routes, Route } from "react-router-dom";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import Four0Four from "./Pages/Four0Four";
import AllTransactions from "./Pages/AllTransactions";
import Balance from "./Pages/Balance";


function App() {
  return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/balances" element={<Balance/>} />
          <Route path="/transactions/new" element={<New/>} />
          <Route path="/transactions" element={<AllTransactions/>} />
          <Route path="/transactions/:index" element={<Show/>} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
          <Route path="*" element={<Four0Four />} />
        </Routes>
        <Footer />
      </div>
  );
}


export default App;
