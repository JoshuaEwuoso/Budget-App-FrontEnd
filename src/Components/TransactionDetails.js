import axios from "axios";
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
    console.log("I'm here too");
  }, []);

  const handleDelete = () => {
    axios
    .delete(`${URL}/transactions/${index}`)
    .then(() => navigate("/transactions"));
  };

  return (
    <article>
        <p>
            Date: {entry.date}
        </p>
        <p>
            Name: {entry.name}
        </p>
        <p>
            Amount: ${entry.amount}
        </p>
        <p>
            Location: {entry.location}
        </p>
        <p>
            Source: {entry.source}
        </p>
        <div>
            <Link to={`/transactions/${index}/edit`}>
                <button>Edit</button>
            </Link>
            <Link to={"/transactions"}>
                <button>Back</button>
            </Link>
        </div>
        <div>
            {" "}
            <button onClick={handleDelete}>Delete</button>
        </div>
    </article>
  );
}

export default TransactionDetails;