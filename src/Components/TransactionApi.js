import { useEffect, useState } from "react";
import axios from "axios";
import Transaction from "./Transaction";


const TransactionApi = () => {
    const [entry, setEntry] = useState([]);
    const URL = process.env.REACT_APP_API_URL;
    
    useEffect(() => {
        axios
        .get(`${URL}/transactions`)
        .then((response) => setEntry(response.data));
        console.log("I'm here");
      }, []);

    return (
        <div>
            <section>
                <table>
                    <thead>
                    </thead>
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