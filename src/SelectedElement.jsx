import React from "react";
import {useState} from 'react';
import ClearIcon from '@mui/icons-material/Clear';

export function SelectedElement({ label, handleDelete, value, clrCd, clrCdTxt }) {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <>
            <div className="selectedElement" style={{ backgroundColor: clrCd, color: clrCdTxt }}>
                <div className="selectedElementText">
                    <p>{label}</p>
                </div>
                <div 
                    className="selectedElementDeleteBtn"
                    style={{backgroundColor: isHovering ? clrCdTxt : ''}}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button
                        style={{color: isHovering ?  'white' : ''}} 
                        size="small"
                        className="deleteBtn"
                        type="delete"
                        onClick={(e) => handleDelete(value, e)}
                    >
                        <ClearIcon className="deleteBtnIcon" fontSize="small" />
                    </button>
                </div>
            </div>
        </>
    );
}