import React from 'react';
import './App.css';


import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/Rowpost/RowPost';
import { comedyMovies, originals, trending,horrorMovies,action,romance } from './urls';



function App() {

  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title={'Netflix Originals'}/>
    <RowPost url={action} title={'Action'} isSmall />
    <RowPost url={romance} title={'Romance'} isSmall />
    <RowPost url={trending} title={'Trending'} isSmall />
    <RowPost url={comedyMovies} title={'Comedy'} isSmall />
    <RowPost url={horrorMovies} title={'Horror'} isSmall />
    
    
    </div>
  );
}

export default App;
