import axios from "axios";
import "../Styling/Balance.css";
import { useEffect, useState } from "react";

const TransactionBalance = () => {
    const [entry, setEntry] = useState([]);
    const URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        axios
        .get(`${URL}/transactions`)
        .then((response) => setEntry(response.data));
    }, []);

    const balance = entry.map(item => Number(item.amount)).reduce((prev, curr) => Number(prev) + Number(curr), 0).toLocaleString("en-US");
    
    const moneyOut = entry.map(item => {
        if(typeof item.amount === "number" || typeof item.amount === "string") {
            return String(item.amount)
        }
    }).filter((item) => {
        return item.includes("-")
    }).reduce((prev, curr) => Number(prev) + Number(curr), 0).toLocaleString("en-US");

    const moneyIn = entry.map(item => {
        if(typeof item.amount === "number" || typeof item.amount === "string") {
            return String(item.amount)
        }
    }).filter((item) => {
        return (!item.includes("-"))
    }).reduce((prev, curr) => Number(prev) + Number(curr), 0).toLocaleString("en-US");


    return (
        <div>
            <table>
                <thead>
                    <tr className="details">
                        <th>Balance</th>
                        <th>Money Made</th>
                        <th>Money Spent</th>
                    </tr>
                </thead>
                <tr className="transaction">
                    <td>${balance}</td>
                    <td>${moneyIn}</td>
                    <td>${moneyOut}</td>
                </tr>
            </table>
        </div>
    );
}

export default TransactionBalance;