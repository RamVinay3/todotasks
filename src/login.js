import React, { Component } from 'react'
import styles from './login.module.css'
import app from './firebase'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { Navigate, NavLink } from 'react-router-dom'
export class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
   
       email:'',
       password:''
    }
  }
  handleemail=(e)=>{
    this.setState({email:e.target.value})

}
handlepassword=(e)=>{
    this.setState({password:e.target.value})

}
login=()=>{
  // navigate('/signup')
//  console.log( document.getElementById("category").value);
  const auth = getAuth();
signInWithEmailAndPassword(auth, this.state.email, this.state.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  window.location.href='/homepage'
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
// handle=(e)=>{
//     // this.setState({:e.target.value})

// }
  render() {
    return (
      <div className={styles.whole}>
      <div>
        <h1>Login</h1>
      
       <div><input value={this.state.gmail} onChange={this.handleemail} placeholder='write your gmail' className={styles.large}></input></div> 
        <div><input value={this.state.password} onChange={this.handlepassword} type='password'placeholder='type your password' className={styles.large}></input>
       <div id={styles.name}>
       <select name="category" >
        <option value="user">user</option>
        <option value="admin">admin</option>
        
        
      </select>
       </div>
           <NavLink to="/signup">
        <p style={{margin:'10px'}}>don't have an account?signin</p>

           </NavLink>
                  </div>
      <div>  <button onClick={this.login} className={styles.butt}>Login</button></div>
      </div>
      </div>
      // <h1>iam login</h1>
    )
  }
}

export default Login