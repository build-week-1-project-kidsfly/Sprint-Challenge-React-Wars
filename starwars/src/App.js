import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ListOfCharacters from "./components/ListOfCharacters";


const App = () => {
    const [starWarsImages, setStarWarsImages] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
            .then(res => {
                const characters = res.data.results;
                setStarWarsImages(characters)
            })
            .catch(err => console.log(err));
    }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        <ListOfCharacters individual={starWarsImages} />
    </div>
  );
};

export default App;
