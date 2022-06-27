import React, { Component } from 'react'
import Topbar from './topbar'
import Nav from './nav'
import Tasks from './tasks'
import styles from './homepage.module.css'
import { Button, Modal,Input } from 'antd';
import Axios from 'axios'
import { dblClick } from '@testing-library/user-event/dist/click'
import app from './firebase'
import axios from 'axios'
import { getAuth,onAuthStateChanged} from "firebase/auth";
// import auth from './firebase'
const auth = getAuth();




// import e from 'cors'
// import * as firebase from 'firebase'
// var v=firebase.functions().httpsCallable('vinay');
// v().then((e=>{
//   console.log("dataa is",e)
// }))
// Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/helloWorld').then((res)=>{
  
//   console.log(res)
// })
// Axios.post('http://localhost:5001/todotasks-b53b5/us-central1/vinay',{
//   name:"helloooo"
// }).then(e=>{
//   console.log("sucsess fully posted data")
// }).catch((e)=>{
//   console.log("error is ",e)
// })
// Axios.post('http://localhost:2000/vinay',{
//   name:"helloooo"
// }).then(e=>{
//   console.log("sucsess fully posted data")
// }).catch((e)=>{
//   console.log("error is ",e)
// })
// Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/hello').then((e)=>{
//   console.log("e is",e)
// })
// Axios.post('http://localhost:5001/todotasks-b53b5/us-central1/widgets/vinay',{name:"nagraj"}).then((e)=>{
//   console.log("e is post",e)
// })



export class Homepage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         visible:false,
         task:'',
         date:'',
         category:'',
         allinone:[],
         email:'',
         
         default:true

      }
    }
  
  
   
  
    callaxiom=(keynumber)=>{
      var key;
      if(keynumber==undefined&&key==undefined)
      {
      key='today'
        keynumber=key
      }
      if(keynumber==undefined)
      keynumber=key;
      this.setState({default:false})

      // var  keynumber='today';
      // this.setState({default:false},()=>{
       
      //   keynumber=this.state.key;
      //   console.log(keynumber)
      // })
      // console.log(keynumber)
    //  var  keynumber=this.state.key
      if(keynumber==='today'){
  
        
        Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/today').then((res)=>{
    
        console.log("iam in today")
       this.setState({allinone:res.data})
       }).catch((error)=>{
         console.log(error);
       }
       )
  
      }
     else if(keynumber=='archive'){
        Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/archive').then((res)=>{
    
          console.log("iam in archive")
          console.log(res.data)
         this.setState({allinone:res.data})
         }).catch((error)=>{
           console.log(error);
         }
         )
  
      }
      else if(keynumber=='todaydue'){
        Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/todaydue').then((res)=>{
    
          console.log("iam in todaydue")
         this.setState({allinone:res.data})
         }).catch((error)=>{
           console.log(error);
         }
         )
  
      }
      else if(keynumber=='alltododue'){
        Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/alltododue').then((res)=>{
    
          console.log("iam in alltododue")
         this.setState({allinone:res.data})
         }).catch((error)=>{
           console.log(error);
         }
         )
  
      }
      else if(keynumber=='personal'){
        Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/personal').then((res)=>{
    
          console.log("iam in todaydue")
         this.setState({allinone:res.data})
         }).catch((error)=>{
           console.log(error);
         }
         )

      }
      else if(keynumber=='office'){
        Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/office').then((res)=>{
    
          console.log("iam in todaydue")
         this.setState({allinone:res.data})
         }).catch((error)=>{
           console.log(error);
         }
         )
      }
      else if(keynumber=='home'){
        Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/home').then((res)=>{
    
          console.log("iam in todaydue")
         this.setState({allinone:res.data})
         }).catch((error)=>{
           console.log(error);
         }
         )

      }
  
    
    }
  
  
  
  
    componentDidMount=async()=>{
    // Axios.get('http://localhost:5001/todotasks-b53b5/us-central1/widgets/gettodayduetask').then((res)=>{
  
    //   console.log(res.data)
    //  this.setState({allinone:res.data})
    //  }).catch((error)=>{
    //    console.log(error);
    //  }
    //  )
   
  
    

    
      if(this.state.default)
    this.callaxiom()
   }
 
  showModal = () => {

        this.setState({visible:true});
      };
      handletask=(e)=>{
        this.setState({task:e.target.value})
      }
      handledate=(e)=>{
        this.setState({date:e.target.value})
      }
    check=(l)=>{
      console.log(l)
      
      Axios.post("http://localhost:5001/todotasks-b53b5/us-central1/widgets/completetask",{l })
    //  this.callaxiom()
      // this.setState({allinone:})

      

    }
      handleOk = () => {
        this.setState({visible:false});
        var select = document.getElementById('category');
      var value = select.options[select.selectedIndex].value;
        // console.log(value)
        var k=this.state.date.split('/')
        var l=k[2]+"-"+k[1]+"-"+k[0]
        const d=new Date()
       
        // if(d.getFullYear==k[2]){
        //   if(d.getMonth()==k[1]){
        //     if(d.getDate()>k[0]){

        //       console.log("you have chosen past date")
        //       return;
        //     }

        //   }
        //   else if(d.getMonth()>k[1]){

        //     console.log("wrong date")
        //     return;
        //   }
        // }
        // else if(d.getFullYear()>k[2]){
        //   console.log('wrong date')
        //   return;
        // }
        var m=d.getFullYear()+"-"+String(Number(d.getMonth())+1)+"-"+d.getDate()
        console.log(m)
        Axios.post('http://localhost:5001/todotasks-b53b5/us-central1/widgets/adddata',{
         task:this.state.task,
         date:this.state.date,
         duedate:l, 
        completedate:'',
         createdate:m,
         type:value,
         status:'false',
        //  email:this.state.email

        
        }).then((e)=>{
  console.log("e is post",e)
})
    this.callaxiom()
      };
    
      handleCancel = () => {
        // console.log('vinay',this.state.visible)
        this.setState({visible:false});
      };
      delete =(l)=>{
        Axios.post("http://localhost:5001/todotasks-b53b5/us-central1/widgets/deletetask",{l} )
      }
    
     
  render() {
    // console.log(this.state.allinone)
    return (
   <div>

      <Topbar open={this.showModal}></Topbar>

     <div id={styles.main}>
        <div id={styles.nav}>
        <Nav pin={this.callaxiom}></Nav>
        </div>
    

        <div >
        <Tasks tasks={this.state.allinone} delete={this.delete} check={this.check}open={this.showModal}></Tasks>
        </div>
        <Modal id={styles.modal} title="Add Task" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
        <span>write your task</span>
        <Input className={styles.todo} value={this.state.task} onChange={this.handletask}   placeholder="write briefly about todo task"></Input>
        <span>due date</span>
        <Input className={styles.todo}  value={this.state.date} onChange={this.handledate} placeholder="Date in DD/MM/YY"></Input>
      
        <select id="category" name="category" className={styles.category}>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Personal">Personal</option>
        
        </select>
      </Modal>
     </div>
     

   </div>

     
    )
  }
}

export default Homepage