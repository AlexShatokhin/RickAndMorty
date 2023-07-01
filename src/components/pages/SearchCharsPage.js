import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";


import RickAndMortyService from "../../services/HttpRequest"

import "./SearchCharsPage.scss"

const SearchCharsPage = () => {

    const [value, setValue] = useState("");
    const [page, setPage] = useState(1);
    const [chars, setChars] = useState([]);
    const {loading, error, getAllCharacters} = RickAndMortyService();

    useEffect(()=>{
        setPage(1);
        if(value !== "")
            updateCharList();
    }, [value])

    function changeValue(e){
        setValue(e.target.value);
    }

    function updateCharList(){
        getAllCharacters(0, {name:value})
        .then(onCharsLoaded)
    }

    function onCharsLoaded(chars){
        setChars(chars);
    }

    
    function renderItems(chars){
        return chars.map((char, i) => {
            if(i < 5)
                return (
                    <div tabIndex={0} key={char.id} className="search_result-item">
                        <Link to = {`/${char.id}`}>
                            <img src={char.image} alt={char.name} className="search_item-image" />
                            <h2 className="search_item-name">{char.name}</h2>
                        </Link>

                    </div>
                )
        })
    }

    const isLoading = (loading)?<Spinner /> : null;
    const isError = (error)? <h1>There is no characters with current name!</h1> : null;
    const isCharsLoaded = (!loading && !error)? renderItems(chars) : null;

    return (
        <div className="search_wrapper">
            <div className="search_form">
                <input onChange={changeValue} type="text" className="search_input" placeholder="Type name of required character..."/>
                <button className="button_search"> <i className="fa-solid fa-magnifying-glass"></i> </button>
            </div>
            <p className="search_result-text">Result:</p>
            <hr />
            <div className="search_result">
                {isLoading}
                {isError}
                {isCharsLoaded}
            </div>
            {isCharsLoaded && isCharsLoaded.length >= 5 ? <p className="search_more">...</p> : null}
        </div>
    )
}

export default SearchCharsPage;