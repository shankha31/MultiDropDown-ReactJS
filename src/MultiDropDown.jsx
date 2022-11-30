import React, { useRef, useState } from "react";
import "./index.css";
import Element from './Element';
import { SelectedElement } from "./SelectedElement";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CancelIcon from '@mui/icons-material/Cancel';

function MultiDropDown({ options, preSelected }) {

    const unSelectedItems = options.filter(function (unSelectedItems) {
        return !preSelected.find(function (preSelectedItem) {
            return unSelectedItems.value === preSelectedItem.value
        })
    })

    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedElement, setSelectedElement] = useState(preSelected);
    const [unSelectedElement, setUnSelectedElement] = useState(unSelectedItems);

    const ref = useRef();
    const refInp = useRef();

    const handleDelete = (color, e) => {
        e.stopPropagation();
        const itm = selectedElement.find((item) => item.value === color);
        setUnSelectedElement(prevarr => [...prevarr, itm]);
        setSelectedElement(selectedElement.filter((item) => item.value !== color));
    }

    const DeleteAll = () => {
        selectedElement.map((selectedItem) => setUnSelectedElement((preval) => [...preval,selectedItem] )
        )
        setSelectedElement(() => []);
    }
 
    const handleView = (color, e) => {
        e.stopPropagation();
        const itm = options.find((item) => item.value === color);
        setUnSelectedElement(unSelectedElement.filter((item) => item.value !== color));
        setSelectedElement((prevarr) => [...prevarr, itm]);
    }
    const hideDropdown = () => {
        if (!showDropdown) {
            ref.current.className = "element-box hidden";
            refInp.current.className = "input inpHover";
        }
        else{
            setShowDropdown(prevValue => !prevValue);
        }
    }
    const viewDropdown = () => {
        ref.current.className = "element-box";
        refInp.current.className = "input clicked";
    }

    useEffect(()=>{
        showDropdown ? viewDropdown() : hideDropdown();
    },[showDropdown])

    const handleShowDropdown = (e) => {
        e.stopPropagation();
        setShowDropdown(prevValue => !prevValue);
    }
    return (
        <>
            <div className="parent" onClick={hideDropdown}>
                <div className="structure">
                    <div className="input inpHover" onClick={handleShowDropdown} ref={refInp} >
                        <div className="selectedElementParent">
                            {!selectedElement.length ? <p className="placeHolderInput">Select...</p> :
                                (selectedElement.map((element) => <SelectedElement
                                    key={element.value}
                                    value={element.value}
                                    label={element.label}
                                    handleDelete={handleDelete}
                                    clrCd={element.clrCd}
                                    clrCdTxt={element.clrCdTxt}
                                />
                                ))
                            }
                        </div>
                        {selectedElement.length ?(
                            <span className="crossIconParent"> 
                                <CancelIcon className="crossIcon" onClick={DeleteAll} fontSize='small' /> 
                            </span> 
                        ) : <></> }
                        <span className="downArrow"> <KeyboardArrowDownIcon className="downArrowIcon"/> </span>
                    </div>
                    <div className='element-box hidden' ref={ref}>
                        {!unSelectedElement.length ? <p className="placeHolderMenuBox">No More Values</p> :
                            (unSelectedElement.map((element) => {
                                return (
                                    <Element
                                        key={element.value}
                                        value={element.value}
                                        label={element.label}
                                        clrCd={element.clrCd}
                                        clrCdTxt={element.clrCdTxt}
                                        onClick={handleView}
                                    />
                                );
                            }))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MultiDropDown;
