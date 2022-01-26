import React from "react";
import NavBar from "./NavBar";
import "../Styling/New.css";
import TransactionNew from "../Components/TransactionNew";

const New = () => {
    return (
        <>
            <NavBar />
            <div className="new">
                <h2>New Transaction</h2>
                <TransactionNew />
            </div>
        </>
    );
}

export default New;