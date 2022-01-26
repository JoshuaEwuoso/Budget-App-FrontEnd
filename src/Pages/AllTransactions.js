import React from "react";
import "../Styling/Transaction.css";
import NavBar from "./NavBar";
import TransactionApi from "../Components/TransactionApi";

const Logs = () => {
    return (
        <>
            <NavBar />
            <div className="all">
                <h2>All Transactions</h2>
                <TransactionApi />
            </div>
        </>
    );
}

export default Logs;