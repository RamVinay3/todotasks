// // import { doc, setDoc } from "firebase/firestore"; 
// const functions = require("firebase-functions");
// const admin = require('firebase-admin');
// admin.initializeApp();
// const db=admin.firestore()
// // const express=require('express')
// // const app=express();
// // var cors = require('cors')
// // app.use(cors())
// // app.get('/hello',(req,res)=>{
// //   console.log(req)
// //   return res.send("vinay")

// // })


// await  db.collection(k).get().then((querysnapshot)=>{
  //   console.log("ehheehheheeeeeeeeeeeeeeeeee",querysnapshot)
  //   querysnapshot.forEach((doc)=>{
  //     console.log("heheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  //     // taskcarrier.push(doc.data())
  //     // console.log(taskcarrier.length,"hi iam this doc")
  //   })
  // }).catch(e=>{
  //   console.log("error is",e)
  // })



// // app.get('/vinay',(req,res)=>{
// //   console.log(req.body)
// //   return res.send("vinay")

// // })
// // app.listen(2000)
// // console.log("db is",db)

// // // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.set('Access-Control-Allow-Origin', '*');
//     var x=100
//   functions.logger.info("Hello logs!", {structuredData: true});
//   console.log(request.body,"is request")
//   // db.collection('users').get().then(q=>{
//   //   q.forEach((doc)=>{
//   //     console.log(doc.data())
//   //   })
//   // })
  // db.collection('users').add({
  //   name:"helloo"
  // }).then(e=>{
  //   console.log("hello sent data")
  // })
//   response.send(JSON.stringify(x)); 
// });
// exports.vinay = functions.https.onCall((data, context) => {
//   console.log("data is",data)
//   return {a:"hellooo"}
// });
// // exports.vinay = functions.https.onCall((data, context) => {
// //   // response.set('Access-Control-Allow-Origin', '*');
// //   // var x=100
// //   console.log("data is",data)
// //   return {a:"hellooo"}
// // // functions.logger.info("Hello logs!", {structuredData: true});
// // // console.log(data,"is request")
// // // db.collection('users').get().then(q=>{
// // //   q.forEach((doc)=>{
// // //     console.log(doc.data())
// // //   })
// // // })
// // // db.collection('users').add({
// // //   name:"helloo"
// // // }).then(e=>{
// // //   console.log("hello sent data")
// // // })
// // // response.send(JSON.stringify(x)); 
// // });
// exports.AddTask = functions.firestore
// .document('my-collection/{docId}')
// .onWrite((change, context) => { /* ... */ });
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const admin = require('firebase-admin');
const { dblClick } = require('@testing-library/user-event/dist/click');
const { refreshToken } = require('firebase-admin/app');
const { auth } = require('firebase-admin');
admin.initializeApp();
const app = express();
// const  store=require('node-localstorage').LocalStorage
var LocalStorage = require('node-localstorage').LocalStorage,
store = new LocalStorage('./scratch');
// const authmiddleware=require('./authenticationmiddle')
// app.use(authmiddleware) 
const db=admin.firestore()
// const auth=admin.auth()
myfunction= (doc)=>{
  console.log('vinay 400')
}
// Automatically allow cross-origin requests

app.use(cors({ origin: true }));

app.get('/hello', (req, res) => {
  res.end("iam vinay 9.0");
  console.log("hello",store.getItem("email"))  
});

// var authmail=global.value;
// console.log(authmail,"iam authmail")
authmail='123@gmail.com'


const d=new Date()
  var m=d.getFullYear()+"-"+String(Number(d.getMonth())+1)+"-"+d.getDate()

app.post('/completetask',(req,res)=>{

  var due="users/"+authmail+"tasks/TodoTasks/duedates/"+req.body.l.duedate;
  var presentcomplete="users/"+authmail+"tasks/TodoTasks/completed/"+m
  var complete="users/"+authmail+"tasks/TodoTasks/allinone/completed"
  var incomplete="users/"+authmail+"tasks/TodoTasks/allinone/notcompleted"
  var create="users/"+authmail+"tasks/TodoTasks/createtime/"+req.body.l.createdate
  console.log(req.body)
  db.collection(presentcomplete).add({
    task:req.body.l.task,
    status:'complete',
    duedate:req.body.l.duedate,
    type:req.body.l.type,
    createdate:req.body.l.createdate,
  


  })

  db.collection(create).doc(req.body.l.id).update({
    status:'complete'
  })
  db.collection(complete).add({
    task:req.body.l.task,
    status:'complete',
    duedate:req.body.l.duedate,
    completedate:m,
    type:req.body.l.type

  }).then(()=>{
    console.log('addded to complete')
  })
  console.log(req.body.l.id)
  
  console.log('entered complete task')
  db.collection(incomplete).doc(req.body.l.id).delete().then(()=>{
    console.log('deleted incomplete')
  })
  db.collection(due).doc(req.body.l.id).delete().then(()=>{
    console.log('successfully deleted')
  })
  .catch((error)=>{
    console.log('error found')
  })
  // db.doc(req.body.)
  // console.log(l)
  res.end('data completed transferring')
})



app.post('/deletetask',async(req,res)=>{
  var gmail=authmail
  var due="users/"+gmail+"tasks/TodoTasks/duedates/"+req.body.l.duedate;
  var create="users/"+gmail+"tasks/TodoTasks/createtime/"+req.body.l.createdate;
  console.log(req.body.l)
  var week;
  var z=authmail+'tasks'
  await db.collection('users').doc(z).get().then((doc)=>{
    week=doc.data().thisweek
  })
  db.collection('users').doc(gmail+'tasks').update({
    thisweek:week-1
  })
  var allinone="users/"+authmail+"tasks/TodoTasks/allinone/notcompleted"
  db.collection(due).doc(req.body.l.id).delete().then(()=>{
    console.log("deleted in due mode ")
  })
  db.collection(create).doc(req.body.l.id).delete().then(()=>{
    console.log('deleted in create mode too')
  })
  db.collection(allinone).doc(req.body.l.id).delete().then(()=>{
    console.log('delete fron all in one')
  })

})

app.get('/alltodotask',async(req,res)=>{

  var k="users/"+authmail+"tasks/TodoTasks/allinone/notcompleted"
  var taskcarrier=[]
  await db.collection(k).get().then(q=>{
    q.forEach(doc=>{

     
      if(doc.data().duedate!=m){
        console.log(doc.data().duedate,m,"helo iam alltodo")
        var obj={
          task:doc.data().task,
          status:doc.data().status,
          duedate:doc.data().duedate,
          type:doc.data().type,
          id:doc.id ,
          createdate:doc.data().createdate,
        }
        taskcarrier.push(obj);
      }
     
      // console.log("hello data is",doc.id,doc.data())

    })
  })
  console.log(taskcarrier.length,"iam altodtaks")
  res.send(JSON.stringify(taskcarrier))
  // res.end('hello i am alltodotasks')


})




app.get('/gettodayduetask',async(req,res)=>{
  
  var k="users/"+authmail+"tasks/TodoTasks/duedates/"+m
    console.log(k)
  var taskcarrier=[]
  await db.collection(k).get().then(q=>{
    q.forEach(doc=>{
      var obj={
        task:doc.data().task,
        status:doc.data().status,
        duedate:doc.data().duedate,
        type:doc.data().type,
        id:doc.id ,
        createdate:doc.data().createdate
      }
      taskcarrier.push(obj);
      // console.log("hello data is",doc.id,doc.data())

    })
  })

  
  // console.log(taskcarrier.length,"hello this is c11")
  
  res.send(JSON.stringify(taskcarrier))
})

app.post('/adddata', async(req, res) => {
  // console.log("body is",req.body)
  var gmail=authmail;
  var due="users/"+gmail+"tasks/TodoTasks/duedates/"+req.body.duedate
  var create="users/"+gmail+"tasks/TodoTasks/createtime/"+req.body.createdate
  var allinone="users/"+gmail+"tasks/TodoTasks/allinone/notcompleted"
  // var userpath="users/"+gmail
  var path;
  var z=authmail+'tasks'
  var week;
  await db.collection('users').doc(z).get().then((doc)=>{
    week=doc.data().thisweek
  })
  
db.collection('users').doc(z).update({
  thisweek:week+1
})

  await db.collection(create).add({
    task:req.body.task,
    duedate:req.body.duedate,
    type:req.body.type,
    status:req.body.status
  }).then((res)=>{
    var k=res.path.split('/')
    console.log(k[k.length-1])
    path=k[k.length-1]

  })
  await db.collection(due).doc(path).set({
    task:req.body.task,
    duedate:req.body.duedate,
    type:req.body.type,
    status:req.body.status,
    createdate:req.body.createdate,
   

  })
  await db.collection(allinone).doc(path).set({
    task:req.body.task,
    duedate:req.body.duedate,
    type:req.body.type,
    status:req.body.status,
    createdate:req.body.createdate,
   

  })


    

  res.end("Received POST request!");  
});




app.get('/today',async(req,res)=>{
console.log(req.body)
  var k="users/"+authmail+"tasks/TodoTasks/completed/"+m
  var taskcarrier=[]
  await db.collection(k).get().then(q=>{
    q.forEach(doc=>{
      var obj={
        task:doc.data().task,
        status:doc.data().status,
        duedate:doc.data().duedate,
        type:doc.data().type,
        id:doc.id ,
        createdate:doc.data().createdate,
      }
      taskcarrier.push(obj);
      // console.log("hello data is",doc.id,doc.data())

    })
  })
  console.log(taskcarrier.length,"iam today")
  res.send(JSON.stringify(taskcarrier))
  // res.end('hello i am alltodotasks')


})
app.get('/archive',async(req,res)=>{

  var k="users/"+authmail+"tasks/TodoTasks/allinone/completed"
  var taskcarrier=[]
  await db.collection(k).get().then(q=>{
    q.forEach(doc=>{
      var obj={
        task:doc.data().task,
        status:doc.data().status,
        duedate:doc.data().duedate,
        type:doc.data().type,
        id:doc.id ,
        createdate:doc.data().createdate,
      }
      console.log(doc.data())
      if(doc.data().completedate!=m)
      taskcarrier.push(obj);
      console.log("hello data is",doc.id,doc.data())

    })
  })
  console.log(taskcarrier.length,"iam archive")
  res.send(JSON.stringify(taskcarrier))
  // res.end('hello i am alltodotasks')


})
app.get('/getusers',async(req,res)=>{
  var taskcarrier=[]
  await db.collection('users').get().then((snapshot)=>{
    snapshot.forEach((doc)=>{
      var obj={
       name:doc.data().firstname+" "+doc.data().secondname,
       lastweek:doc.data().prevweek,
      thisweek:doc.data().thisweek
      }
      
      taskcarrier.push(obj);
    })
  })
  console.log(taskcarrier.length,"iam admin blog")
  res.send(JSON.stringify(taskcarrier))
})
app.post('/signin',async(req,res)=>{
  userpath=req.body.email+'tasks'
//   auth.createUserWithEmailAndPassword(req.body.email, req.body.password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });

  db.collection('users').doc(userpath).set({
    email:req.body.email,
    firstname:req.body.firstname,
    secondname:req.body.secondname,
    prevweek:0,
    thisweek:0

  }).then(()=>{
    console.log('iam created  ')
  })
  res.end('iam done today itself')

})
app.get('/todaydue',async(req,res)=>{
  console.log(m)

  var k="users/"+authmail+"tasks/TodoTasks/duedates/"+m
  console.log(k,"iam email after all")
  var taskcarrier=[]
  await db.collection(k).get().then(q=>{
    q.forEach(doc=>{
      var obj={
        task:doc.data().task,
        status:doc.data().status,
        duedate:doc.data().duedate,
        type:doc.data().type,
        id:doc.id ,
        createdate:doc.data().createdate,
      }
      taskcarrier.push(obj);
      // console.log("hello data is",doc.id,doc.data())

    })
  })
  console.log(taskcarrier.length,"iam todaydue")
  res.send(JSON.stringify(taskcarrier))
  


})
app.get('/alltododue',async(req,res)=>{
  // console.log(req)

  var k="users/"+authmail+"tasks/TodoTasks/allinone/notcompleted"
  var taskcarrier=[]
  await db.collection(k).get().then(q=>{
    q.forEach(doc=>{
     if(doc.data().duedate!=m){
      var obj={
        task:doc.data().task,
        status:doc.data().status,
        duedate:doc.data().duedate,
        type:doc.data().type,
        id:doc.id ,
        createdate:doc.data().createdate,
      }
      taskcarrier.push(obj);
     }
      // console.log("hello data is",doc.id,doc.data())

    })
  })
  console.log(taskcarrier.length,"iam alltododue")
  res.send(JSON.stringify(taskcarrier))
  // res.end('hello i am alltodotasks')


})




app.get('/personal',async(req,res)=>{
  console.log(m)

  var k="users/"+authmail+"tasks/TodoTasks/duedates/"+m
  console.log(k,"iam email after all")
  var taskcarrier=[]
  await db.collection(k).get().then(q=>{
    q.forEach(doc=>{
      if(doc.data().type=='Personal'){
        var obj={
          task:doc.data().task,
          status:doc.data().status,
          duedate:doc.data().duedate,
          type:doc.data().type,
          id:doc.id ,
          createdate:doc.data().createdate,
        }
        taskcarrier.push(obj);
       }
      // console.log("hello data is",doc.id,doc.data())

    })
  })
  console.log(taskcarrier.length,"iam todaydue")
  res.send(JSON.stringify(taskcarrier))
  


})


app.get('/office',async(req,res)=>{
  console.log(m)

  var k="users/"+authmail+"tasks/TodoTasks/duedates/"+m
  console.log(k,"iam email after all")
  var taskcarrier=[]
  await db.collection(k).get().then(q=>{
    q.forEach(doc=>{
      if(doc.data().type=='Office'){
        var obj={
          task:doc.data().task,
          status:doc.data().status,
          duedate:doc.data().duedate,
          type:doc.data().type,
          id:doc.id ,
          createdate:doc.data().createdate,
        }
        taskcarrier.push(obj);
       }
      // console.log("hello data is",doc.id,doc.data())

    })
  })
  console.log(taskcarrier.length,"iam todaydue")
  res.send(JSON.stringify(taskcarrier))
  


})

app.get('/home',async(req,res)=>{
  console.log(m)

  var k="users/"+authmail+"tasks/TodoTasks/duedates/"+m
  console.log(k,"iam email after all")
  var taskcarrier=[]
  await db.collection(k).get().then(q=>{
    q.forEach(doc=>{
      console.log(doc.data(),"iam home")
     if(doc.data().type=='Home'){
      var obj={
        task:doc.data().task,
        status:doc.data().status,
        duedate:doc.data().duedate,
        type:doc.data().type,
        id:doc.id ,
        createdate:doc.data().createdate,
      }
      taskcarrier.push(obj);
     }
      // console.log("hello data is",doc.id,doc.data())

    })
  })
  console.log(taskcarrier.length,"iam todaydue")
  res.send(JSON.stringify(taskcarrier))
  


})

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);