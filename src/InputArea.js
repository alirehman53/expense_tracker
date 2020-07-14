import React, { useState, useContext } from "react";
import "./InputArea.css";
import InputContext from "./InputContext";
import ValueContext from "./ValueContext";

function InputArea() {
    let [transaction, setTranc] = useState({
        description: "",
        amount: 0,
    });

    let history = useContext(InputContext);
    let inc_exp_bal = useContext(ValueContext);

    const AddTranc = () => {
        console.log(inc_exp_bal.inc);

        var amt = parseInt(transaction.amount);

        if (amt >= 0) {
            inc_exp_bal.fn1(amt);
            inc_exp_bal.fn3(inc_exp_bal.inc + inc_exp_bal.exp + amt);
            history.fn(transaction);
        } else if (amt < 0 && inc_exp_bal.inc + inc_exp_bal.exp + amt >= 0) {
            inc_exp_bal.fn2(amt);
            inc_exp_bal.fn3(inc_exp_bal.inc + inc_exp_bal.exp + amt);
            history.fn(transaction);
        } else {
            alert("insufficient balance for this expense");
        }

        setTranc({
            description: "",
            amount: 0,
        });
    };

    return ( <
        div className = { "transaction" } >
        <
        h4 > Add New Transaction < /h4>{" "} <
        label > { " " }
        Description < br / >
        <
        br / > { " " } <
        input id = { "des" }
        value = { transaction.description }
        placeholder = { "details of transaction" }
        onChange = {
            (event) =>
            setTranc({
                description: event.target.value,
                amount: transaction.amount,
            })
        }
        className = { "input" }
        />{" "} <
        /label>{" "} <
        br / > < br / > { " " } <
        label > { " " }
        Amount < br / >
        <
        span style = {
            { fontSize: "10px" } } >
        (
            for income enter + ve value and
            for expense enter - ve value.) { " " } <
        /span>{" "} <
        br / >
        <
        br / > { " " } <
        input id = { "amt" }
        value = { transaction.amount }
        onChange = {
            (event) =>
            setTranc({
                description: transaction.description,
                amount: event.target.value,
            })
        }
        className = { "input" }
        />{" "} <
        /label>{" "} <
        br / >
        <
        button onClick = { AddTranc }
        className = { "button" } > { " " }
        Add { " " } <
        /button>{" "} <
        /div>
    );
}

export default InputArea;