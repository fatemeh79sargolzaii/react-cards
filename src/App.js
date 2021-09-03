import React, { useState } from 'react'
import Tweet from './Components/Tweet'
const App = () => {
//   const[isRed,setRed]= useState(false)
//  const[count,setCount]= useState(0) 
//  const increment=()=>{
//    setCount(count+1)
//    setRed(!isRed)
//  }
 const[user]= useState([
   { name:"DEV ED", massage:"This is a random tweet"},
    {name:"Teraversy Media" , massage:"700K my dudes"},
   {name:"Mosh", massage:"My new course is available"} ,
])

 return (
    <div className="app" >
      {user.map(user => (
         <Tweet  name={user.name} massage={user.massage}/>
      ))}
       {/* <Tweet  name="DEV ED" massage="This is a random tweet"/>
       <Tweet  name="John Snow" massage="I am the true king"/>
       <Tweet  name="Teraversy Media" massage="700K my dudes"/>
       <Tweet  name="Mosh"massage="My new course is available" />
        */}
        {/* <h1 className={isRed? 'red':""}>Change my color!</h1>
        <button onClick={increment}>Incremant</button>
        <h1>{count}</h1> */}
    </div>
  )
}

export default App

