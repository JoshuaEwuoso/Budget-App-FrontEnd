import React from "react";
import "../Styling/Details.css";
import NavBar from "./NavBar";
import TransactionDetails from "../Components/TransactionDetails";

const Show = () => {
    return (
        <>
            <NavBar />
            <div className="details">
                <h2>Show</h2>
                <TransactionDetails />
            </div>
        </>
    );
}

export default Show;