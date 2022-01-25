import React from "react";
import NavBar from "./NavBar";
import TransactionBalance from "../Components/TransactionBalance";

const Balance = () => {
    return (
        <>
            <NavBar />
            <div>
                <h2>Balance</h2>
                <TransactionBalance />
            </div>
        </>
    );
}

export default Balance;