import { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import RandomChar from '../RandomChar/RandomChar';
import CharacterItems from '../CharacterItems/CharacterItems';
import CharFilters from '../CharFilters/CharFilters';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


import './App.scss';

import RickAndMortyImage from '../../resources/img/Rick_and_Morty_logo.png'
import RickAndMortyLogo from '../../resources/img/Rick_and_Morty_logo_small.jpg'


class App extends Component {

    state = {
        filter: {},
    }

    onChangeGlobalFilter = (filterObj) => {
        this.setState({
            filter: filterObj
        })
    }

    render(){
        return (
            <>
                <BrowserRouter> 
                    <nav className='navigation_menu'>
                        <Link to="/"><img src={RickAndMortyLogo} alt="" className="main_image" /></Link>
                        
                        <div className="navigation_menu-buttons">
                            <Link to="/"><div className="favorite_items">Favorites</div></Link>
                            <Link to="/"><div className="search_item">Find character</div></Link>
                        </div>
                        
                    </nav>
        
                    <img src={RickAndMortyImage} alt="Rick and Morty logo" className="rick_and_morty_logo" />
        
                    <div className="main">
        
                        <div className="characters_func">
                            <div className="char_filters">
                                <ErrorBoundary>
                                    <CharFilters onChangeGlobalFilter = {this.onChangeGlobalFilter} />
                                </ErrorBoundary>
                                
                            </div>
                            <div className="random_char">
                                <ErrorBoundary>
                                    <RandomChar />
                                </ErrorBoundary>
                                
                            </div>
                        </div>
                
                        <ErrorBoundary>
                            <CharacterItems filter = {this.state.filter}/>
                        </ErrorBoundary>
                        
                    </div>
                </BrowserRouter>
            </>
        )
    }

}

export default App;
