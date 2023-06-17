import {useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useRickAndMortyService from "../../services/HttpRequest"
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

import "./CharacterItems.scss"
import "../../mixins/mixins.scss"

const CharacterItems = (props) => {

    const [chars, setChars] = useState([]);
    const [page, setPage] = useState(1);
    const [charListEnded, setCharListEnded] = useState(false);
    const [prevPropsFilter, setPrevPropsFilter] = useState({});

    const {loading, error, getAllCharacters} = useRickAndMortyService();

    useEffect(updateChars,[])

    useEffect(()=>{
        if(JSON.stringify(prevPropsFilter) != JSON.stringify(props.filter)){
            console.log(props.filter);
            setPrevPropsFilter(props.filter);
            setPage(1);
            setChars([]);
            updateChars();
        }
    }, [props.filter])

    function updateChars(page, filter){

        getAllCharacters(page, props.filter)
        .then(onCharsLoaded)


    }


    function onCharsLoaded(elems) {
        setChars(chars => [...chars, ...elems]);
        setPage(page => page + 1);
        setCharListEnded(elems.length < 20 )
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
    const isCharsLoaded = (chars.length)? renderItems(chars) : null;

    return(
        <>
            <div className="character_items">
                {isLoading}
                {isError}
                {isCharsLoaded}
            </div>
            <button disabled = {charListEnded} onClick={()=>updateChars(page)} className="load_more button">LOAD MORE</button>
        </>

    )

}

export default CharacterItems