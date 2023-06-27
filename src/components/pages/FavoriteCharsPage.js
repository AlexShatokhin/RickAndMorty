import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

import RickAndMortyService from "../../services/HttpRequest";

import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

import "./FavoriteCharsPage.scss"

const FavoriteCharsPage = (props) => {
    

    const [charList, setCharList] = useState([]); 
    const {loading, error, getMultipleCharacters} = RickAndMortyService();

    useEffect(()=>{
        updateChars()
    }, [])

    function updateChars(){
        getMultipleCharacters(props.FavList)
        .then(onCharListLoaded)
    }

    function onCharListLoaded(chars){
        setCharList(chars)
    }

    function renderItems(chars){
        return chars.map(char => {
            return (
                <div tabIndex={0} key={char.id} className="character_item">
                    <Link to = {`/${char.id}`}>
                        <img src={char.image} alt={char.name} className="character_item-image" />
                        <h2 className="character_item-name">{char.name}</h2>
                    </Link>

                </div>
            )
        })
    }


    const isLoading = (loading)?<Spinner /> : null;
    const isError = (error)?<Error /> : null;
    const isCharsLoaded = (charList.length)? renderItems(charList) : <p className="character_items-empty">Oops! There is no favorite characters...</p>;

    return(
        <div className="favorite_chars">
            <div className="favorite_chars-title">FAVORITE CHARACTERS</div>

            <div className="character_items">
                {isLoading}
                {isError}
                {isCharsLoaded}
            </div>                   
    
        </div>

    )

}

export default FavoriteCharsPage