import React from 'react';

const SearchBox=(props)=>
{   
    return(
    <input 
    className='b--green pa3 ba bg-lightest-blue'
    type='text'
    placeholder="Search Robots"
    onChange={props.down}
    />
    )
}

export default SearchBox;