import React, {Component} from 'react';

const pokes = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
]

function poke(){
    
    let counter = 0;
    let pokeinfo = '';
    while(counter < pokes.length){
        pokeinfo += '' + pokes[counter].id;
        pokeinfo += ' ' + pokes[counter].name;
        pokeinfo += ' ' + pokes[counter].type;
        pokeinfo += ' ' + pokes[counter].base_experience + ' ';

        counter = counter + 1;
    }



    return pokeinfo;
}

function getPokeName(counter){
    return pokes[counter].name;
}

class Pokemon extends Component{
    
    render(){
        return <div>
            
            <h1>{}</h1>
        </div>
    }

}

export default Pokemon;