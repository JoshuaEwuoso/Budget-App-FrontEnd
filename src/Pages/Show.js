import React from "react";
import NavBar from "./NavBar";
import TransactionDetails from "../Components/TransactionDetails";

const Show = () => {
    return (
        <>
            <NavBar />
            <div>
                <h2>Show</h2>
                <TransactionDetails />
            </div>
        </>
    );
}

export default Show;