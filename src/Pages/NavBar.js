import { Link } from "react-router-dom";

const NavBar = () => {
    return (
      <nav>
        <h1>
            <Link to="/">Budget App</Link>
        </h1>
        <h3>
            <Link to="/transactions">All Transactions</Link>
        </h3>
        <button>
            <Link to="/transactions/new">New Transaction</Link>
        </button>
      </nav>
    );
  }
  export default NavBar;