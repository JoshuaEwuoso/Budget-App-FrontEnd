import "../Styling/Transaction.css";
import { Link } from "react-router-dom";

const Transaction = ({ entry, index }) => {
  return (
    <tr className="transaction">
      <td>{entry.date}</td>
      <td>
        <Link to={`/transactions/${index}`}>{entry.name}</Link>
      </td>
      <td>${entry.amount}</td>
    </tr>
  );
}

export default Transaction;