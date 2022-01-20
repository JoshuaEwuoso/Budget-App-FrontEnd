import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <nav>
        <h1>
          <Link to="/">Budget App</Link>
        </h1>
        <Link to="/transactions">All Transactions</Link>
      </nav>
    );
  }