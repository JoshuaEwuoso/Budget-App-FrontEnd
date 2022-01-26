import axios from "axios";
import "../Styling/Details.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const TransactionDetails = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [entry, setEntry] = useState([]);
  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`${URL}/transactions/${index}`)
    .then((response) => setEntry(response.data));
  }, []);

  const handleDelete = () => {
    axios
    .delete(`${URL}/transactions/${index}`)
    .then(() => navigate("/transactions"));
  };

  return (
    <>
        <table>
            <thead>
                <tr className="details">
                    <th>Date</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Location</th>
                    <th>Source</th>
                </tr>
            </thead>
            <tbody>
                <tr className="transaction">
                    <td>{entry.date}</td>
                    <td>{entry.name}</td>
                    <td>${entry.amount}</td>
                    <td>{entry.location}</td>
                    <td>{entry.source}</td>
                </tr>
                <br/>
                <tr className="buttons">
                    <Link to={`/transactions/${index}/edit`}>
                    <button className="button">Edit</button>
                    </Link>
                    <Link to={"/transactions"}>
                        <button className="button">Back</button>
                    </Link>
                    {" "}
                    <button onClick={handleDelete} className="button">Delete</button>
                </tr>
            </tbody>
        </table>
    </>
  );
}

export default TransactionDetails;