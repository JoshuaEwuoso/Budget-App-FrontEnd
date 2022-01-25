import { Link } from "react-router-dom";
import "../Styling/NavBar.css";
import Balance from "../Components/TransactionBalance";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1>
        <Link to="/" className="link">Budget App</Link>
      </h1>
      <h3>
        <Link to="/transactions" className="link all">All Transactions</Link>
      </h3>
      <button>
        <Link to="/transactions/new" className="link">New Transaction</Link>
      </button>
      <h3>
        <Link to="/balances" className="link balance">Balance: <Balance /></Link>
      </h3>
    </nav>
  );
}

export default NavBar;