import axios from "axios";
import "../Styling/New.css";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const TransactionNew = () => {
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
        .get(`${URL}/transactions`)
        .then((response) => setNewEntry(response.data));
      }, []);

    const handleText = (event) => {
        setNewEntry({ ...newEntry, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post(`${URL}/transactions`, newEntry)
        .then(() => navigate("/transactions"));
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
                        <tbody>
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
                        </tbody>
                        <br/>
                    <div>
                    <input type="submit" className="button"/>
                        <Link to={"/transactions"} className="button">
                            <button>Cancel</button>
                        </Link>
                    </div>
                    </table>
                </form>
            </div>
        </>
    );

}
export default TransactionNew;