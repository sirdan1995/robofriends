import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends Component
{
    constructor()
    {   
        super();
        this.state={
            robo:[],
            searchfield:''
        }
    }

     fun =(test)=>
    {   
        this.setState({searchfield:test.target.value});
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({robo:users}));
    }
    
    render(){

        const filteredRobots=this.state.robo.filter((anobject)=>
        {
            return(
                anobject.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            )
        })

    return( 
        <div className='tc'>
            <h1 className='f1'>ROBOFRIENDS</h1>
            <SearchBox down={this.fun}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
        </div>

    )

    }


}
export default App;