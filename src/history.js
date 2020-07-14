import React, { useContext } from "react";
import "./history.css";
import InputContext from "./InputContext";

function Trans(props) {
    return ( <
        div key = { props.id }
        className = { "transac" }
        style = {
            {
                borderRight: "4px solid " + (props.amount >= 0 ? "green" : "red"),
            }
        } >
        <
        p style = {
            {
                float: "left",
                paddingLeft: "5px",
                maxWidth: "40vw",

                wordBreak: "break-all",
            }
        } >
        { " " } { props.description } { " " } <
        /p>{" "} <
        p style = {
            { float: "right", paddingRight: "5px" } } > { props.amount } < /p>{" "} <
        /div>
    );
}

function History() {
    let object = useContext(InputContext);
    let his = [];

    for (let i = 0; i < object.hist.length; i++) {
        his.push( <
            Trans id = { i }
            description = { object.hist[i].description }
            amount = { object.hist[i].amount }
            />
        );
    }

    return ( <
        div className = { "history" } > { " " } <
        h4 > Transaction History < /h4> <hr / > { his } { " " } <
        /div>
    );
}

export default History;