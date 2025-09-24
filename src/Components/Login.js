import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate, useLocation } from "react-router-dom"

const Login = ({setcredentials,credentials}) => {
  let navigate=useNavigate()
  const {login} = useContext(noteContext)
  const location = useLocation()
  const prefillemail = location.state?.email || ""
  const [email, setEmail] = useState(prefillemail)
  const [password, setPassword] = useState("")
  const handleClick=async(e)=>{
    e.preventDefault()
    // login({email,password})
    const response = await login({ email, password })  // assume login returns response
    if (response?.authtoken) {
      localStorage.setItem("token", response.authtoken)
      navigate("/")
    }
    else{
      alert("Invalid Credentials")
      
    }
  }
  return (
    <form>
      <h2>Welcome back!</h2>
      <p>Please Login to continue</p>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1"  className="form-label">Email address</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>Login</button>
    </form>
  )
}

export default Login
