import {useState } from 'react';

import RandomChar from '../RandomChar/RandomChar';
import CharacterItems from '../CharacterItems/CharacterItems';
import CharFilters from '../CharFilters/CharFilters';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


import './MainPage.scss';

import RickAndMortyImage from '../../resources/img/Rick_and_Morty_logo.png'

const MainPage = () => {

    const [filter, setFilter] = useState({});

    const onChangeGlobalFilter = (filterObj) => {
        setFilter(filterObj)
    }


    return (
        <>

            <img src={RickAndMortyImage} alt="Rick and Morty logo" className="rick_and_morty_logo" />

            <div className="main">

                <div className="characters_func">
                    <div className="char_filters">
                        <ErrorBoundary>
                            <CharFilters onChangeGlobalFilter = {onChangeGlobalFilter} />
                        </ErrorBoundary>
                        
                    </div>
                    <div className="random_char">
                        <ErrorBoundary>
                            <RandomChar />
                        </ErrorBoundary>
                        
                    </div>
                </div>
        
                <ErrorBoundary>
                    <CharacterItems filter = {filter}/>
                </ErrorBoundary>
                
            </div>            

        </>
    )

}

export default MainPage;
