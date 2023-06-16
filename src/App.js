import axios from 'axios';
import './App.css';
import { Component } from 'react';

class App extends Component {
/*
state = {
  users:[]
}

//There are methods get/post/delete:

componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>{
  const users = res.data;
  this.setState({users});
  //console.log(res.data)
})
}

  render(){
  return (
    <div className="App">
{this.state.users.map((user, id)=> 
<p key={id}>{user.name} 
<span> {user.email}</span>
<span> {user.address.city}</span>
<span> {user.address.street}</span>
</p>)}
    </div>
  );
}
}

*/

state = {
  posts:[]
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts ')
  .then(res=>{
  const posts = res.data;
  this.setState({posts})

  
  })
}

render(){
  return(
    <div>
{this.state.posts.map((post,id)=>

  <h1 key={id}>{post.title}
  <span>{post.body}</span></h1>

)}

    </div>
  )
}
}
export default App;


//https://jsonplaceholder.typicode.com/users -  USERS API
//https://jsonplaceholder.typicode.com/posts  - posts API