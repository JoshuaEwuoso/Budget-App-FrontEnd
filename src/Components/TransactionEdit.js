import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const TransactionEdit = () => {
    let { index } = useParams();
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();

    const [newEntry, setNewEntry] = useState({
        date: "",
        name: "",
        amount: "",
        location: "",
        source: "",
    });

    useEffect(() => {
        axios
        .get(`${URL}/transactions/${index}`)
        .then((response) => setNewEntry(response.data));
    }, []);

    const handleText = (event) => {
        setNewEntry({ ...newEntry, [event.target.id]: event.target.value });
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .put(`${URL}/transactions/${index}`, newEntry)
        .then(() => navigate(`/transactions/${index}`));
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                <label htmlFor="name">Entry Name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={newEntry.name}
                    onChange={handleText}
                    placeholder="Name of entry?"
                    required
                />
                <label htmlFor="date">Date:</label>
                <input
                    id="date"
                    name="date"
                    type="date"
                    value={newEntry.date}
                    onChange={handleText}
                />
                <label htmlFor="amount">Amount:</label>
                <textarea
                    id="amount"
                    name="amount"
                    type="number"
                    value={newEntry.amount}
                    onChange={handleText}
                    placeholder="How much is it?"
                />
                <label htmlFor="location">Location:</label>
                <input
                    id="location"
                    name="location"
                    type="text"
                    value={newEntry.location}
                    onChange={handleText}
                    placeholder="From what account?"
                />
                <label htmlFor="source">Source:</label>
                <input
                    id="source"
                    name="source"
                    type="text"
                    value={newEntry.source}
                    placeholder="Where is it going?"
                    onChange={handleText}
                />
                <br />
                <input type="submit" />
                </form>
            </div>
            <div>
                <Link to={"/transactions"}>
                    <button>Cancel</button>
                </Link>
            </div>
            <div>
                <Link to={`/transactions/${index}`}>
                    <button>Back</button>
                </Link>
            </div>
        </>
    );
}

export default TransactionEdit;