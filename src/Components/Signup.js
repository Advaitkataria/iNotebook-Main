import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  let navigate = useNavigate()
  const { signup } = useContext(noteContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const handleClick = async (e) => {
    e.preventDefault()
    const response = await signup({ name,email, password })  // assume signup returns response
    if (response?.authtoken) {
      navigate("/login")
    }
    else {
      alert("User already exists. Please Login.")
      navigate("/login",{state:{email}})
    }
  }
  return (
    <form>
      <h2>Create an account to use INotebook</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>Sign Up</button>
    </form>
  )

}

export default Signup
