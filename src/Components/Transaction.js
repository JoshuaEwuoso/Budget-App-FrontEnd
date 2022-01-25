import "../Styling/Transaction.css";
import { Link } from "react-router-dom";

const Transaction = ({ entry, index }) => {
  return (
    <tr>
      <td className="transaction">
        <Link to={`/transactions/${index}`} className="transaction"><br/>Date: {entry.date}<br/>Name: {entry.name}<br/>Amount: ${entry.amount}</Link>
      </td>
    </tr>
  );
}

export default Transaction;