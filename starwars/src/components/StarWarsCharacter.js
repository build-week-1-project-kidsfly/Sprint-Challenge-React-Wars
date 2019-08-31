import React from 'react';

const StarWarsCharacter = (props) => {
    const { name, height, mass, hair_color, skin_color } = props;
    return (
        <div>
            <h1>{name}</h1>
            <div>
                <h4>`Height: ${height}`</h4>
                <h4>`Mass: ${mass}kg`</h4>
            </div>

            <div>
                <h4>`Hair Color: ${hair_color}`</h4>
                <h4>`Skin Color: ${skin_color}`</h4>
            </div>
        </div>
    );
};

export default StarWarsCharacter;