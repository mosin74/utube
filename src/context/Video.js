import React, { createContext, useState } from "react";

export const VideoContext = createContext()

export const VideoContextProvider = (props) => {

    const [videolist, setVideolist] = useState([]);
    return (
        <VideoContext.Provider value={{videolist,setVideolist}}> {props.children} </VideoContext.Provider>
    );
};