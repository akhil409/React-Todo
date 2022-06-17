import React, { useState } from "react";

export const DummyContext = React.createContext({});

export const DummyContextProvider = (props) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <DummyContext.Provider value={{
            data, setData, loading, setLoading
        }} >
            {props.children}
        </DummyContext.Provider>
    )
}

