import React from 'react';
import './App.css';
import './index.css';
import useState from 'react'


function App() {
  const [Home,setHome]=useState(false);

  const [state,setstate]=useState({
    Name:"",
    Department:"",
    Rating:"",
    employees:[]
  }
  )

  function BackBtn(){
    setHome((prevValue)=>{return !prevValue});
  } 

  const ChangeHandler=(e)=>{
  setstate({...state,[e.target.name] : e.target.value})
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    const empObj={
      Name:state.Name,
      Department:state.Department,
      Rating:state.Rating
    }
   const temp=state.employees;
   temp.push(empObj);
   setstate(...state,{employees:temp})
   BackBtn();
   document.getElementById('forms').reset();
  }

  if(Home){
    return(
    <div id="divContainer">
  {
    state.employees.map((value,index)=>{
      return(
        <div key={index} id="childContainer">Name:{value.Name}| Department:{value.Department}| Rating:{value.Rating}</div>
      )
    }
    )
  }
  <button onClick={BackBtn}>Go back</button>
</div>

    )
  }
  else{
  return (
  <div id="bodyBackground">    
    <div id="headerText">EMPLOYEE FEEDBACK FORM</div>
    <form>
  <label id="nameText" className="labelText">
    Name:
    <input type="text" name="Name" onChange={ChangeHandler} style={{fontSize:'30px',borderRadius:'20px',marginTop:'20px'}} />
  </label>
  <br></br>
  <br></br>
  <label id="nameText" className="labelText">
    Department:
    <input type="text" name="Department" onChange={ChangeHandler} style={{fontSize:'30px',borderRadius:'20px',marginTop:'20px'}}/>
  </label>
  <br></br>
  <br></br>
  <label id="nameText" className="labelText">
    Rating:
    <input type="number" name="Rating" onChange={ChangeHandler} style={{fontSize:'30px',borderRadius:'20px',marginTop:'20px'}}/>
  </label>
  <br></br>
  <br></br>
  <button onClick={submitHandler} className="labelText" style={{borderRadius:'15px',marginLeft:'700px',fontSize:'30px',marginTop:'20px'}}>Submit</button>
</form>  
</div>
  )
  }
}

export default App;
