import axios from "axios";
import "../Styling/Balance.css";
import "../Styling/NavBar.css";
import { useEffect, useState } from "react";

const TransactionBalance = () => {
    const [entry, setEntry] = useState([]);
    const URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        axios
        .get(`${URL}/transactions`)
        .then((response) => setEntry(response.data));
    }, []);

    const balance = entry.map(item => Number(item.amount)).reduce((prev, curr) => Number(prev) + Number(curr), 0);
    
    const moneyOut = entry.map(item => {
        if(typeof item.amount === "number" || typeof item.amount === "string") {
            return String(item.amount)
        }
    }).filter((item) => {
        return item.includes("-")
    }).reduce((prev, curr) => Number(prev) + Number(curr), 0);

    const moneyIn = entry.map(item => {
        if(typeof item.amount === "number" || typeof item.amount === "string") {
            return String(item.amount)
        }
    }).filter((item) => {
        return (!item.includes("-"))
    }).reduce((prev, curr) => Number(prev) + Number(curr), 0);


    return (
        <div className="balance">
            <h3>
                ${balance}
            </h3>
            <h3>
                Money Out: ${moneyOut}
            </h3>
            <h3>
                Money In: ${moneyIn}
            </h3>
        </div>
    );
}

export default TransactionBalance;