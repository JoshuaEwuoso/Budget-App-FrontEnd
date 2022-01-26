import React from "react";
import "../Styling/Edit.css";
import NavBar from "./NavBar";
import TransactionEdit from "../Components/TransactionEdit";

const Edit = () => {
    return (
        <>
            <NavBar />
            <div className="edit">
                <h2>Edit</h2>
                <TransactionEdit />
            </div>
        </>
    );
}

export default Edit;