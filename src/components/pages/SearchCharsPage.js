import { useState } from "react";
import { debounce } from "lodash";

import "./SearchCharsPage.scss"

const SearchCharsPage = () => {

    const [value, setValue] = useState("");
    
    const changeValue = (e) => {
        setValue(e.target.value)
    }

    return (
        <div className="search_wrapper">
            <input onChange={changeValue} type="text" className="search_input" placeholder="Type name of required character..."/>
            <p className="search_result-text">Result:</p>
            <hr />
            <div className="searh_result"></div>
        </div>
    )
}

export default SearchCharsPage;