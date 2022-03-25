import React from 'react';
import './PersonCard.css';

class PersonCard extends React.Component{
    constructor( props){      //aqui espera un constructor
        super( props)
    }
        render(){
            const {firstName, lastName,age,hairColor} =this.props;
            return(
                <div className='PersonCard'>
                    <h2>{lastName}, {firstName}</h2>
                    <h4> Age : {age} </h4>
                    <h5> Hair Color : {hairColor} </h5>
    
    
                </div>
            )
    
        }
    }
    
        


export default PersonCard;