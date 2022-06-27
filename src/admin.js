import React, { Component } from 'react'
import styles from './admin.module.css'
import Axios from 'axios'
// import application from './firebase'
import { Navigate, NavLink } from 'react-router-dom'

export class Admin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         adminview:[]
      }
    }
    componentDidMount(){
        Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/getusers').then((res)=>{
        this.setState({adminview:res.data})
  
  console.log(res.data,"iam response from admin")
})
    }
  render() {
    
    return (
      <div >
        
        <button>< NavLink to='/'> logout</NavLink></button>
       {
        this.state.adminview.map((l,i)=>{
            return(

                <div className={styles.whole}>
                <div className={styles.main}>
                    <h1>{l.name}</h1>
                    <div className={styles.week}>
                    <div >previous week:{l.lastweek}</div>
                    <div>This week:{l.thisweek}</div>
                    </div>
                </div>
        
                
        
            
              </div>
            )
        })
       }

        

    
      </div>
    )
  }
}

export default Admin
