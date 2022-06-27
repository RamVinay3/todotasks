import React, { Component } from 'react'
import styles from './tasks.module.css'
import {PlusOutlined,DeleteOutlined} from '@ant-design/icons';
import { Checkbox, Input } from 'antd';
import { Button, Tooltip } from 'antd';
const st={
  display:'none'
}
const dt={
  color:'red'
}
var color1={
  backgroundColor:'green'
}
var color2={
  backgroundColor:'orange'
}
var color3={
  backgroundColor:'red'
  
}
export class Tasks extends Component {
  
  render() {
    return (
     <div>
        <h2>Today</h2>
       <button className={styles.b1} onClick={this.props.open}>
        <PlusOutlined  id={styles.plus}></PlusOutlined>
         <span id={styles.add}>Add new Task</span>  
        
        
        </button>
        {/* <div className={styles.task}>
        <input type="checkbox" id={styles.check}></input>
          <div id={styles.certaintag}>
          <span id={styles.display}>complete input-box Component design Today</span>
          <br/>
          <span id={styles.today}>Today</span>
          </div>
        </div> */}
           {
         this.props.tasks.map((l,i)=>{
          var k=(l.status=='complete')?st:dt
          var z=(l.type=='home')?color1:(l.type=='office')?color2:color3;
          return(
            <div className={styles.task}>
        <input style={k} type="checkbox" onChange={()=>{
          this.props.check(l)
        }} id={styles.check}></input>
          <div id={styles.certaintag}>
          <span id={styles.display}>{l.task}</span>
         
          <br/>
         <div>
         <span id={styles.delete} onClick={()=>{
          this.props.delete(l)
         }}><DeleteOutlined style={k} /></span>
          <span id={styles.today}>{l.duedate}{"           "} </span>
          <span style={z}id={styles.type}>{l.type}</span>
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

export default Tasks