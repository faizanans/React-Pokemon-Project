import React, {Component} from 'react';
import './PokeCard.css'

function getPokeImg(id){
    if (id < 10){
        id = '00' + id;
    }else if(id < 100){
        id = '0' + id;
    }
    return 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+id+'.png'
}

class PokeCard extends Component{
    render(){
        return <div className='PokeCard'>
            <h1 className='PokeCard-title'>{this.props.name}</h1>
            <img className='PokeCard-img' src={getPokeImg(this.props.id)}/>
            <div>
                <h1 className='PokeCard-type'>Type: {this.props.type}</h1>
                <h1 className='PokeCard-exp'>Exp: {this.props.base_experience}</h1>
            </div>
        </div>
    }

}

export default PokeCard;