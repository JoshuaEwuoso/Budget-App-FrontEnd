import axios from "axios";
import Transaction from "./Transaction";
import { useEffect, useState } from "react";

const TransactionApi = () => {
    const [entry, setEntry] = useState([]);
    const URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        axios
        .get(`${URL}/transactions`)
        .then((response) => setEntry(response.data));
    }, []);

    return (
        <div>
            <section>
                <table>
                    <tbody>
                        {entry.map((entry, index) => {
                            return <Transaction key={index} entry={entry} index={index} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default TransactionApi;