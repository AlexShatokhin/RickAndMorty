import {lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Error from '../Error/Error';

import './App.scss';

import RickAndMortyLogo from '../../resources/img/Rick_and_Morty_logo_small.jpg'

const MainPage = lazy(()=> import("../pages/MainPage"));
const SearchCharsPage = lazy(()=> import("../pages/SearchCharsPage"));
const SingleCharPage = lazy(()=> import("../pages/SingleCharPage"));


const App = () => {


    return (
        <>
            <BrowserRouter> 
                <nav className='navigation_menu'>
                    <Link to="/"><img src={RickAndMortyLogo} alt="" className="main_image" /></Link>
                    
                    <div className="navigation_menu-buttons">
                        <Link to="/favorites"><div className="favorite_items">Favorites</div></Link>
                        <Link to="/search"><div className="search_item">Find character</div></Link>
                    </div>
                    
                </nav>
    
                <Routes>
                    <Route path='/' element = {<MainPage />} />
                    <Route path='/search' element = {<SearchCharsPage />} />
                    <Route path='/:id' element = {<SingleCharPage />} />
                    <Route path='/favorites' element = {<Error />} />
                    <Route path='*' element = {<Error />} />
                </Routes>
    
            </BrowserRouter>
        </>
    )

}

export default App;
