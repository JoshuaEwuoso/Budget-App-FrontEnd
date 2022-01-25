import React from "react";
import NavBar from "./NavBar";
import TransactionEdit from "../Components/TransactionEdit";

const Edit = () => {
    return (
        <>
            <NavBar />
            <div>
                <h2>Edit</h2>
                <TransactionEdit />
            </div>
        </>
    );
}

export default Edit;