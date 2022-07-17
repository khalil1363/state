import { Component } from 'react';
import './App.css';
class App extends Component {
  state={
    name : 'fray khalil',
    bio : 'sdgssss',
    profession :'student',
    shows: false,
    timer:0,
    interval: null,
}


componentDidMount(){
  this.setState({interval:setInterval(()=>{this.setState({timer:this.state.timer+ 1})
  },1000)})
}

  


render(){
 const handleChange =a =>{
    this.setState({shows:!this.state.shows})
  }  
  return  (

<div >
  <div className='di'>
  <img src='/user.jpg' alt='user'/>
 <h2 id='count'>{this.state.timer}</h2>
<h1>{this.state.name}</h1> 
<h2>{this.state.profession}</h2>
<h2>{this.state.bio}</h2>
<button onClick={handleChange}>click</button>
</div>
</div>
  ) }     
}
export default App;