import React, { useState } from "react";
import "./Container.css";
import IncExp from "./inc-exp.js";
import InputArea from "./InputArea.js";
import History from "./history.js";
import ValueContext from "./ValueContext";
import InputContext from "./InputContext";

function Container() {
    let [balance, setBalance] = useState(0);
    let [income, setIncome] = useState(0);
    let [expense, setExpense] = useState(0);

    let [history, setHistory] = useState([]);

    return ( <
        div className = { "container" } >
        <
        h3 > Expense Tracker < /h3>{" "} <
        div style = {
            { textAlign: "left" } } >
        <
        h4 > Current Balance < /h4> <strong> ${balance} </strong > { " " } <
        /div>{" "} <
        ValueContext.Provider value = {
            {
                inc: income,
                fn1: (amt) => setIncome(income + amt),
                exp: expense,
                fn2: (amt) => setExpense(expense + amt),
                bal: balance,
                fn3: (bal) => setBalance(bal),
            }
        } >
        <
        IncExp / > { " " } <
        InputContext.Provider value = {
            {
                hist: history,
                fn: (T) => setHistory(history.concat([T])),
            }
        } >
        <
        History / >
        <
        InputArea / > { " " } <
        /InputContext.Provider>{" "} <
        /ValueContext.Provider>{" "} <
        /div>
    );
}

export default Container;