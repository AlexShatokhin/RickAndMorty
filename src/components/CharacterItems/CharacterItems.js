import { Component } from "react";

import RickAndMortyService from "../../services/HttpRequest"
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

import "./CharacterItems.scss"
import "../../mixins/mixins.scss"

class CharacterItems extends Component{

    state = {
        chars: [],
        loading: true,
        error: false,
        page: 1,
        isFiltered: false,
        charListEnded: false,
    }

    service = new RickAndMortyService();

    componentDidMount(){
        this.updateChars();
    }

    componentDidUpdate(prevProps){
        if(JSON.stringify(prevProps.filter) != JSON.stringify(this.props.filter))
            this.updateChars(1, true);
    }

    updateChars = (page, filter) => {
        this.setState({
            loading: true,
        });

        if(filter){
            this.setState({
                chars: [],
                page: 1,
            });
        }


        this.service.getAllCharacters(page, this.props.filter)
        .then(this.onCharsLoaded)
        .catch(this.onError)


    }


    onCharsLoaded = (elems) => {
        this.setState({
            chars: [...this.state.chars, ...elems],
            loading: false,
            error: false,
            page: this.state.page + 1,
            charListEnded: elems.length < 20 
        })
    }


    onError = () => {
        this.setState({
            chars: [],
            loading: false,
            error: true,
        })
    }

    renderItems = (chars) => {
        return chars.map(char => {
            return (
                <div key={char.id} className="character_item">
                    <img src={char.image} alt={char.name} className="character_item-image" />
                    <h2 className="character_item-name">{char.name}</h2>
                </div>
            )
        })
    }


    render(){
        const {loading, error, chars} = this.state
        const isLoading = (loading)?<Spinner /> : null;
        const isError = (error && !loading && !chars.length)?<Error /> : null;
        const isCharsLoaded = (chars.length)? this.renderItems(chars) : null;

        return(
            <>
                <div className="character_items">
                    {isLoading}
                    {isError}
                    {isCharsLoaded}
                </div>
                <button disabled = {this.state.charListEnded} onClick={()=>this.updateChars(this.state.page)} className="load_more button">LOAD MORE</button>
            </>

        )
    }

}

export default CharacterItems