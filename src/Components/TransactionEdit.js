import axios from "axios";
import "../Styling/Edit.css";
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
                        <tr className="transaction">
                            <td>
                                <label htmlFor="date">Date:</label>
                                <input
                                    id="date"
                                    name="date"
                                    type="date"
                                    value={newEntry.date}
                                    onChange={handleText}
                                />
                            </td>
                            <td>
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
                            </td>
                            <td>
                                <label htmlFor="amount">Amount:</label>
                                <input
                                    id="amount"
                                    name="amount"
                                    type="number"
                                    value={newEntry.amount}
                                    onChange={handleText}
                                    placeholder="How much is it?"
                                />
                            </td>
                            <td>
                                <label htmlFor="location">Location:</label>
                                <input
                                    id="location"
                                    name="location"
                                    type="text"
                                    value={newEntry.location}
                                    onChange={handleText}
                                    placeholder="From what account?"
                                />
                            </td>
                            <td>
                                <label htmlFor="source">Source:</label>
                                <input
                                    id="source"
                                    name="source"
                                    type="text"
                                    value={newEntry.source}
                                    placeholder="Where is it going?"
                                    onChange={handleText}
                                />
                            </td>
                        </tr>
                        <br/>
                        <div className="edit">
                            <input type="submit" />
                            <Link to={`/transactions/${index}`}>
                                <button>Back</button>
                            </Link>
                            <Link to={"/transactions"}>
                                <button>Cancel</button>
                            </Link>
                        </div>
                    </table>
                </form>
            </div>
        </>
    );
}

export default TransactionEdit;