import { useEffect, useState } from "react";
import { useParams } from "react-router"

import RickAndMortyService from "../../services/HttpRequest";

import Spinner from "../Spinner/Spinner"
import Error from "../Error/Error"

const SingleCharPage = () => {

    const {id} = useParams();
    const [char, setChar] = useState(null);

    const {loading, error, getCharacter} = RickAndMortyService();

    useEffect(updateCharacter, [])

    function updateCharacter(){
        getCharacter(id)
        .then(onCharLoaded)
    }

    function onCharLoaded(char){
        setChar(char);
    }

    function renderCharacter(){
        return (
            <div className="character">
                <img src={char.image} alt="" className="character_photo" />
                <ul className="character_text">
                    <li className="character_text-item character_text-item-name">{char.name}</li>
                    <li className="character_text-item"> <span>Status: </span>{char.status}</li>
                    <li className="character_text-item"> <span>Status: </span>{char.status}</li>
                    <li className="character_text-item"> <span>Status: </span>{char.status}</li>
                </ul>
            </div>
        )
    }

    const isLoading = loading ? <Spinner /> : null;
    const isError = error ? <Error /> : null;
    const isChar = char && !loading && !error ? renderCharacter() : null;

    return (
        <div className="character_wrapper">
            {isLoading}
            {isError}
            {isChar}
        </div>
    )

}

export default SingleCharPage;