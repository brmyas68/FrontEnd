import React, { useEffect, useRef, useState } from 'react';
 
import './App.css';
import axios from 'axios';
 

function App() {

  const [Mobile, setMobile] = useState("09115755339");
  const [Token, setToken ]= useState("");
 // const inputRefMobile = useRef<HTMLInputElement>(null);
 
  const Login = async () => {
    //setMobile(inputRefMobile.current!.value);
    const  RequestAuthorizeLogin = {
      Mobile: Mobile
    };
    const url=  " https://localhost:7079/Api/Authentication/Login";
 
    axios.post( url,    RequestAuthorizeLogin )
      .then(res => {
     
        setToken(res.data.token);
      })
  
  };

  const Log= async () => {
    
    const  RequestInsertLogs = {
      LogUserID: 10,
      LogAction: "Insert",
      LogController: "Acoount",
      LogDateTime: "",
      LogMessage:  "Insert Account For UserID 10",

    };
    const url=  " https://localhost:7079/Api/Logs/Insert";
 
    axios.post( url,    RequestInsertLogs )
      .then(res => {
     
        console.log(res.data);
         
      })
  
  };

  const Comment = async () => {
    const  RequestInsertComments = {
      CommentProductID: 10,
      CommentUserID: 10,
      CommentText:  "Insert Comment For ProductID 10",

    };
    const url=  " https://localhost:7079/Api/Comment/Insert";
 
    axios.post( url,    RequestInsertComments )
      .then(res => {
     
        console.log(res.data);
         
      })
  
  };

  const Account = async () => {
    const  RequestInsertAccount = {
      Account_ID: 0,
      AccountOrderID: 10,
      Account_UserID: 10,
      Account_Price: 10000,
      Account_DateTime:  "",
      Account_TypePay: 1,

    };
    const url=  " https://localhost:7079/Api/Account/Insert";
 
    axios.post( url,    RequestInsertAccount )
      .then(res => {
     
        console.log(res.data);
         
      })
  };
  useEffect(() => {
 
  }, []);
  
  return (
    <div className="App">
      
      <br/>
      {/* <input type="text" value={Mobile} placeholder='Mobile'   id="mobile"  name="mobile"  ref={inputRefMobile} /> */}
     
      <input type="text" placeholder='Mobile' value={Mobile}     onChange={ (e)=> { setMobile(e.target.value)}} />
      <input type="button" value="Token Insert" onClick={Login} /> 
      <br/>    <br/>
      <input type="text" value={Token} placeholder='Token' style={{ width:'95%'    }} />

     <br/> <br/>
      
      <input type="button" value="Log Insert" onClick={Log} /> 
      <input type="button" value="Comment Insert" onClick={Comment} /> 
      <input type="button" value="Account Insert" onClick={Account} /> 
      <br/> <br/>

    
    </div>
  );
}

export default App;
