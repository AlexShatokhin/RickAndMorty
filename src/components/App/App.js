import { Component } from 'react';

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
                <nav className='navigation_menu'>
                    <img src={RickAndMortyLogo} alt="" className="main_image" />
                    <div className="search_item">Find character</div>
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
    
    
            </>
        )
    }

}

export default App;
