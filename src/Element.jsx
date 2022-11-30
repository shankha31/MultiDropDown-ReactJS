import React from "react";
import {useState} from 'react';
import "./index.css";

function Element({value,label, onClick, clrCdTxt, clrCd}) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    
    return (
        <>
            <div
                className="element"
                style={{backgroundColor: isHovering ? clrCd : '', color:clrCdTxt}}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => onClick(value, e)}
            >
                <p className="ElementVal">{label}</p>
            </div>
        </>
    );
}

export default Element;
