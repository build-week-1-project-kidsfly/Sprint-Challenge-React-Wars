import React from 'react';
import './StarWars.css';

const StarWarsCharacter = (props) => {
    const { character } = props;
// , height, mass, hair_color, skin_color
    return (
        <div className='character'>
            <h1>{character.name}</h1>
            {/*<div>*/}
            {/*    <h4>`Height: ${height}`</h4>*/}
            {/*    <h4>`Mass: ${mass}kg`</h4>*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <h4>`Hair Color: ${hair_color}`</h4>*/}
            {/*    <h4>`Skin Color: ${skin_color}`</h4>*/}
            {/*</div>*/}
        </div>
    );
};

export default StarWarsCharacter;