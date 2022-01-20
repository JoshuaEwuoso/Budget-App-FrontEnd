import { Link } from "react-router-dom";

function Transaction({ entry, index }) {
  return (
    <tr>
      <td>
        <Link to={`/transactions/${index}`}><br/>Date: {entry.date}<br/>Name: {entry.name}<br/>Amount: ${entry.amount}</Link>
      </td>
    </tr>
  );
}

export default Transaction;