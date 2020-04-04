import React from'react';
import Card from './Card';

const CardList=(robots)=>
{
    const allrobots=robots.robots.map((anobject)=>
    {
        return <Card id={anobject.id} name={anobject.name} email={anobject.email}/>
    })
    return(
    <div>
        {allrobots};
    </div>
    )
}

export default CardList;