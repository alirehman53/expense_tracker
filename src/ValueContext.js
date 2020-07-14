import React from "react";

const ValueContext = React.createContext({
    inc: 0,
    fn1: () => {},
    exp: 0,
    fn2: () => {},
    bal: 0,
    fn3: () => {},
});

export default ValueContext;