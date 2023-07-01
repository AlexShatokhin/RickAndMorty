import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import Skeleton from "react-loading-skeleton";

import 'react-loading-skeleton/dist/skeleton.css'
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

    function renderLoadingItems(){
        let renderSkeletons = [];

        for(let i = 0; i < props.FavList.length; i++){
            renderSkeletons[i] = 
                <Skeleton style={{
                    width: "250px",
                    minHeight: "300px",
                    borderRadius: "10px",
                    margin: "10px"
            }} />
        }

        return renderSkeletons;
    }


    const isLoading = (loading)? renderLoadingItems() : null;
    const isError = (error)? <Error /> : null;
    const isCharsLoaded = (charList.length)? renderItems(charList) : null;

    return(
        <div className="favorite_chars">
            <div className="favorite_chars-title">FAVORITE CHARACTERS</div>
            {(!isLoading && !isCharsLoaded) ? <p className="character_items-empty">Oops! There is no favorite characters...</p> : null}
            <div className="character_items">
                {isLoading}
                {isError}
                {isCharsLoaded}
            </div>                   
    
        </div>

    )

}

export default FavoriteCharsPage