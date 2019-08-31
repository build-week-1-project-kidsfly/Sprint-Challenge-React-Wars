import React from 'react';
import './StarWars.css';

/* Basic template for each Star Wars character */
const StarWarsCharacter = (props) => {
    const { character } = props;

    return (
        <div className='character'>
            <h1>{character.name}</h1>
            <div>
                <h4>Height: {character.height}</h4>
                <h4>Mass: {character.mass}kg</h4>
            </div>

            <div>
                <h4>Hair Color: {character.hair_color}</h4>
                <h4>Skin Color: {character.skin_color}</h4>
            </div>
        </div>
    );
};

export default StarWarsCharacter;