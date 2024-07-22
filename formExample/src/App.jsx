import { useState } from "react"

function App() {
  const [fullName,setFullName]=useState({
    fname:'',
    lname:'',
    email:''
  });

  function printName(){
    alert('submitted');
  }
  
  function updateName(event){
    const {name,value}=event.target;
    setFullName(prevName=>({
      ...prevName,
      [name]:value
    }))
  } 
 
  return (
    <>
        <div className="container">
          <h1>Hello {fullName.fname} {fullName.lname}</h1>
          <p>{fullName.email}</p>
          <form action="index.html" onSubmit={printName}>
            <input 
              name='fname'
              type="text" 
              placeholder="First Name" 
              onChange={updateName}
              value={fullName.fname}
            />
            <input 
              name='lname'
              type="text" 
              placeholder="Last Name?" 
              onChange={updateName}
              value={fullName.lname}
            />
            <input 
              name='email'
              type="text" 
              placeholder="Email" 
              onChange={updateName}
              value={fullName.email}
            />
            <button type='submit'> Submit</button>
          </form>
        </div>
    </>
  )
}

export default App
