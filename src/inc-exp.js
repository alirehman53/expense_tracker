import React, { useContext } from "react";
import "./inc-exp.css";
import ValueContext from "./ValueContext";

function IncExp() {
    let inc_exp = useContext(ValueContext);
    return ( <
        div className = { "inc_exp" } >
        <
        div className = { "left" } > { " " }
        Income < br / > < span style = {
            { color: "green" } } > { " " } { inc_exp.inc } { " " } <
        /span>{" "} <
        /div>{" "} <
        div className = { "right" } > { " " }
        Expense < br / > < span style = {
            { color: "red" } } > { " " } { inc_exp.exp } { " " } <
        /span>{" "} <
        /div>{" "} <
        /div>
    );
}

export default IncExp;