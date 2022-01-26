import React from "react";
import NavBar from "./NavBar";
import "../Styling/Balance.css";
import TransactionBalance from "../Components/TransactionBalance";

const Balance = () => {
    return (
        <>
            <NavBar />
            <div className="balance">
                <h2 >Balance</h2>
                <TransactionBalance />
            </div>
        </>
    );
}

export default Balance;