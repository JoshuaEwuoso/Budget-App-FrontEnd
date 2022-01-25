import { Link } from "react-router-dom";
import axios from "axios";
import "../Styling/NavBar.css";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [entry, setEntry] = useState([]);
    const URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        axios
        .get(`${URL}/transactions`)
        .then((response) => setEntry(response.data));
    }, []);

    const balance = entry.map(item => Number(item.amount)).reduce((prev, curr) => Number(prev) + Number(curr), 0);

    
  return (
    <nav className="NavBar">
      <h1 className="logo">
        <Link to="/" className="link">Budget App</Link>
      </h1>
      <h3>
        <Link to="/transactions" className="link all">All Transactions</Link>
      </h3>
      <h3>
        <Link to="/balances" className="link">Balance: ${balance}
        </Link>
      </h3>
        <Link to="/transactions/new" className="link"><button className="buttonNew">New Transaction</button></Link>
    </nav>
  );
}

export default NavBar;