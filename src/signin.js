import React, { Component } from 'react'
import styles from './signin.module.css'
import Axios from 'axios'
// import auth from './firebase'
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";
import { NavLink } from 'react-router-dom';


// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { Input } from 'antd';
export class Signin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname:'',
         secondname:'',
         email:'',
         password:''
      }
    }
    handlefirst=(e)=>{
        this.setState({firstname:e.target.value})

    }
    handlesecond=(e)=>{
        this.setState({secondname:e.target.value})

    }
    handleemail=(e)=>{
        this.setState({email:e.target.value})

    }
    handlepassword=(e)=>{
        this.setState({password:e.target.value})

    }
   signin= ()=>{
    Axios.post("http://localhost:5001/todotasks-b53b5/us-central1/widgets/signin",{
      firstname:this.state.firstname,
      secondname:this.state.secondname,
      email:this.state.email
    })
    // const auth=getAuth()
    // console.log
    const auth=getAuth()
    createUserWithEmailAndPassword(auth,this.state.email, this.state.password)
        .then((userCredential) => {
          // Signed in 
          console.log("iam user created")
          const user = userCredential.user;
          window.location.href='/'
          // ...
        })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // console.log(this.state.email,this.state.password)
        console.log(error,errorCode,errorMessage,"iam eerror")
        // ..
      });
        // this.setState({:e.target.value})

    }
  render() {
    return (
      <div className={styles.whole}>
      <div>
        <h1>Signup</h1>
      <div className={styles.nameholder}>
       <input value={this.state.firstname} onChange={this.handlefirst} placeholder='firstname' className={styles.name}></input>
        <input value={this.state.secondname} onChange={this.handlesecond} placeholder='second name' className={styles.name}></input>
       </div>
       <div><input value={this.state.gmail} onChange={this.handleemail} placeholder='write your gmail' className={styles.large}></input></div> 
        <div><input value={this.state.password} onChange={this.handlepassword} placeholder='type your password' className={styles.large}></input>
        <p style={{margin:'10px'}}>have an account?<NavLink to='/'>login</NavLink> </p>
        </div>
        
      <div>  <button className={styles.butt} onClick={this.signin}>sign in</button></div>
      </div>
      </div>
    )
  }
}

export default Signin