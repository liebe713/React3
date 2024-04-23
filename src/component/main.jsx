import React, { useState } from "react";

const Main = ({ toggleParagraphVisibility }) => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
        toggleParagraphVisibility(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility} className="p-1 m-2 font-bold border border-black md:rounded-md hover:bg-gray-300 hover:underline">
                {isVisible ? "Hide" : "Show"}
            </button>
        </div>
    );
};

export default Main;
