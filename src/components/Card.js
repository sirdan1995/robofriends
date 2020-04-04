import React from 'react';

const Card=(props)=>
{
    const{id,name,email}=props;
    return(
        <div className='bg-light-green dib tc br3 pa3 ma2 grow shadow-5 bw2'>
            <img alt="not available" src={`https://robohash.org/${id}`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;