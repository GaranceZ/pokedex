import React from 'react';
import Loading from "../Components/Loading";

const PokemonTypes = ({types}) => {
    
    return <div>
        <h4>Types</h4>
        <div className={"d-flex"}>
            <ul>
                {types != undefined && types.map(type => {
                    return <li className={type.type.name}>{type.type.name != undefined && type.type.name}</li>
                })}
            </ul>
        </div>
    </div>;
};

export default PokemonTypes;