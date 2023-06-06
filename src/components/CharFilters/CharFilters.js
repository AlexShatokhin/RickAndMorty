import { Component } from "react";

import "./CharFilters.scss"
import "../../mixins/mixins.scss"

class CharFilters extends Component {

    state = {
        gender: "none", 
        status: "none",
        species: "none",
        filterTypes: {},
    }

    onChangeSelect = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeFilterTypes = () => {
        const {gender, status, species} = this.state
        this.setState({
            filterTypes: {gender, status, species}
        })
        this.props.onChangeGlobalFilter({gender, status, species});
    }

    onClearFilterTypes = () => {
        this.setState({
            gender: "none", 
            status: "none",
            species: "none",
            filterTypes: {},
        })
        this.props.onChangeGlobalFilter({gender: "none", status: "none", species: "none",});
    }

    render(){
        return(
            <>
                <div className="block block_first">

                    <div className="filter_wrapper">
                        <div className="name">Gender</div>
                        <select onChange={this.onChangeSelect} value={this.state.gender} name="gender" id="gender" className="filter filter_gender">
                            <option value="none">None</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </div>

                    <div className="filter_wrapper">
                        <div className="name">Status</div>
                        <select onChange={this.onChangeSelect} value={this.state.status} name="status" id="status" className="filter filter_status">
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
                        <select onChange={this.onChangeSelect} value={this.state.species} name="species" id="species" className="filter filter_species">
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
                        <button className="button button_filter" onClick={this.onChangeFilterTypes}> Filter!</button> 
                        <button className="button button_clear" onClick={this.onClearFilterTypes}> Clear!</button> 
                    </div>

                                       
                </div>



            </>
        )
    }
}

export default CharFilters;