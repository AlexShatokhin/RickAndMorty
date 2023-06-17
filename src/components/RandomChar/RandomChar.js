import {useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RickAndMortyService from "../../services/HttpRequest";
import Error from "../Error/Error";
import Spinner from "../Spinner/Spinner";

import "./RandomChar.scss"
import "../../mixins/mixins.scss"

const RandomChar = () => {

    const [char, setChar] = useState({});
    const {loading, error, getCharacter} = RickAndMortyService();

    useEffect(updateChar, [])

    function updateChar(){

        const id = Math.floor(1 + Math.random() * (900 - 1));
        getCharacter(id)
        .then(onCharLoaded)
    }

    function onCharLoaded(elem){
        setChar(elem);
    }


    const isLoading = (loading && !error && !char.length)?<Spinner /> : null;
    const isError = (error && !loading && !char.length)?<Error /> : null;
    const isCharLoaded = (!error && !loading)?<View image = {char.image} name = {char.name} status={char.status} gender = {char.gender} species={char.species} /> : null;
    const btns = (
        <div className="random_char_buttons">
            <Link to={`/${char.id}`}><button className="random_char_more button">MORE</button></Link>
            <button onClick={updateChar} className="random_char_other button">NEXT</button>
        </div>
    )


    return(
        <div className="card">
            {isLoading}
            {isError}
            {isCharLoaded}
            {btns}
        </div>

    )

}

const View = ({image, name, status, gender, species}) => {
    return (
        <>
            <div className="random_char_card">
                <div className="random_char_wrapper">
                    <img src={image} alt={name} className="random_char_image" />
                    <div className="random_char_text">
                        <h2 className="random_char_title">{name}</h2>
                        <ul className="random_char_params">
                            <li className="random_char_params_item"> Status: <span>{status}</span></li>
                            <li className="random_char_params_item"> Gender: <span>{gender}</span></li>
                            <li className="random_char_params_item"> Species: <span>{species}</span></li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RandomChar;
