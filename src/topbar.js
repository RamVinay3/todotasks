import React, { Component } from 'react'
import styles from './topbar.module.css'
import { Checkbox, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { getAuth } from 'firebase/auth';
// import firebase from "firebase/app";
// import firebase from 
export class Topbar extends Component {
  logout=()=>{
    const auth=getAuth();
   auth.signOut().then(() => {
      // Sign-out successful.
      console.log('successful')
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
    window.location.href='/'
  }
  render() {
    return (
      <div id={styles.top}>
       <p id={styles.appname}>Tasks</p>
       <Input id={styles.search}   placeholder="Search for tasks"></Input>
       <div id={styles.right}>
        <button id={styles.but} onClick={this.logout}>Logout</button>
        <img id={styles.image} src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzQ5ODgwfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60 "></img>
       </div>
       
      </div>
    )
  }
}

export default Topbar