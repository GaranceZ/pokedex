import React from 'react';

const PokemonInfos = ({height, weight}) => {
    return ( 
        <div className={'bg-primary d-flex'}>
                    <div>
                        <h4 className={"text-white p-3"}>Poids :</h4>
                        <p className={"text-center"}>{weight}</p>
                        <h4 className={"text-white p-3"}>Taille :</h4>
                        <p className={"text-center"}>{height}</p>
                    </div>
                    {/*<div>
                        <h4 className={"text-white p-3"}>Catégorie :</h4>
                        <p>{type.weight != undefined && type.weight}</p>
                        <h4 className={"text-white p-3"}>Talent :</h4>
                        <p>{type.weight != undefined && type.weight}</p>
    </div>*/}
                </div>
     );
}
 
export default PokemonInfos;