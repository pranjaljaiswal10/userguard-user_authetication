import { useState } from "react"
import { BASE_URL } from "../utils/constant"


const Signup = () => {
  const [form,setForm]=useState({
    username:"",emailId:"",password:""
  })
   const handleChange=(e)=>{
    setForm({
      [e.target.id]:e.target.value
    })
   }
   const handleSubmit=async()=>{
    try {
         const response=await fetch(`${BASE_URL}/api/login`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(form)
         })
         const data=await response.json()
         console.log(data)
    } catch (error) {
      console.log(error)
    }
   }
  return (
   <form onSubmit={handleSubmit}>
    <input type="text" value={form.username} id="username" onChange={(e)=>handleChange(e)} />
    <input type="email" value={form.emailId} id="emailId" onChange={(e)=>handleChange(e)} />
    <input type="text" value={form.password} id="password" onChange={(e)=>handleChange(e)} />
   </form>
  )
}

export default Signup;