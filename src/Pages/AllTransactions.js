import React from "react";
import NavBar from "./NavBar";
import TransactionApi from "../Components/TransactionApi";

const Logs = () => {
    return (
        <>
            <NavBar />
            <div>
                <h2>All Transactions</h2>
                <TransactionApi />
            </div>
        </>
    );
}

export default Logs;