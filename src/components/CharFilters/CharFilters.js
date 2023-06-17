import { Component, useState } from "react";

import "./CharFilters.scss"
import "../../mixins/mixins.scss"

const CharFilters = (props) => {

    const [gender, setGender] = useState("none");
    const [status, setStatus] = useState("none");
    const [species, setSpecies] = useState("none");


    function onChangeSelect(event){
        const value = event.target.value;
        switch(event.target.name){
            case "gender": setGender(value); break;
            case "staus": setStatus(value); break;
            case "species": setSpecies(value); break;
            default: break;
        }
    }

    function onChangeFilterTypes(){
        props.onChangeGlobalFilter({gender, status, species});
    }

    function onClearFilterTypes(){
        setGender("none");
        setStatus("none");
        setSpecies("none");
        props.onChangeGlobalFilter({gender: "none", status: "none", species: "none",});
    }

    return(
        <>
            <div className="block block_first">

                <div className="filter_wrapper">
                    <div className="name">Gender</div>
                    <select onChange={onChangeSelect} value={gender} name="gender" id="gender" className="filter filter_gender">
                        <option value="none">None</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>

                <div className="filter_wrapper">
                    <div className="name">Status</div>
                    <select onChange={onChangeSelect} value={status} name="status" id="status" className="filter filter_status">
                        <option value="none">None</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>                        
                </div>




            </div>

            <div className="block block_second">

                <div className="filter_wrapper">
                    <div className="name">Species</div>
                    <select onChange={onChangeSelect} value={species} name="species" id="species" className="filter filter_species">
                        <option value="none">None</option>
                        <option value="human">Human</option>
                        <option value="alien">Alien</option>
                        <option value="disease">Disease</option>
                        <option value="humanoid">Humanoid</option>
                        <option value="myth">Mythological Creature</option>
                        <option value="poopybutthole">Poopybutthole</option>
                        <option value="animal">Animal</option>
                        <option value="robot">Robot</option>
                    </select>                    
                </div>
                <div className="buttons_wrapper">
                    <button className="button button_filter" onClick={onChangeFilterTypes}> Filter!</button> 
                    <button className="button button_clear" onClick={onClearFilterTypes}> Clear!</button> 
                </div>

                                    
            </div>



        </>
    )
}

export default CharFilters;