import React from 'react';
import "./index.css";
import MultiDropDown from './MultiDropDown';
import {options} from './sData';

function App() {
    return (
        <>
            <MultiDropDown
                options={options}
                preSelected={options.filter((item) => item.value === 'blue')}
            />
        </>
    );
}

export default App;