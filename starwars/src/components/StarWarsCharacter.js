import React from 'react';
import './StarWars.css';
import styled from "styled-components";

const Person = styled.div`
    width: 40%;
    margin: 50px auto 50px auto;
    background-color: white;
    border-radius: 20px;
    padding: 5px 0px 5px 0px;
`;
const Seperate = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

/* Basic template for each Star Wars character */
const StarWarsCharacter = (props) => {
    const { character } = props;

    return (
        <Person>
            <h1>{character.name}</h1>
            <Seperate>
                <div>
                    <h4>Height: {character.height}</h4>
                    <h4>Mass: {character.mass}kg</h4>
                </div>
                <div>
                    <h4>Hair Color: {character.hair_color}</h4>
                    <h4>Skin Color: {character.skin_color}</h4>
                </div>
            </Seperate>
        </Person>
    );
};

export default StarWarsCharacter;