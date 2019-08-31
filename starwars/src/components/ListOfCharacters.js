import React from 'react';
import StarWarsCharacter from "./StarWarsCharacter";
import './StarWars.css';

const ListOfCharacters = (props) => {
    const { individual } = props;
    return (
        <div>
            {individual.map((item, index) => (<StarWarsCharacter character={item} key={index} />))}
        </div>
    );
};

export default ListOfCharacters;