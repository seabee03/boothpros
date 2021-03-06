import React from 'react';
import {Redirect} from "react-router-dom"
import axios from 'axios';
class User extends React.Component {
  state = {
    email:'',
    password:'',
    welcomeEmail: "",
    redirect: false
  }

  handleInput = event => {
    const {name,value} = event.target
    this.setState({
      [name]: value
    })
  }

  // let's try and login

  handleFormSubmit = event => {
    event.preventDefault()
    const {email,password} = this.state
    axios.post("/api/login", {email, password})
      .then(result => {
        this.setState({redirect:true})
        this.loadProfileInfo()
      })
  }
  handleFormLogout = event => {
    event.preventDefault()
    axios.get("/api/logout")
      .then(result => {
        console.log(result.data)
        this.setState({ welcomeEmail: ""})
      })
  }

  loadProfileInfo = () => {
    axios.get('/api/user/me')
      .then(response => {
        this.setState({welcomeEmail: response.data.email})
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.loadProfileInfo()
  }
  renderRedirect = () =>{
      if(this.state.redirect){
        return <Redirect to="/client-dashboard" />
      }
      return ""
  }
  render(){
    return (
      <div>
          {this.renderRedirect()}
        <h1>{this.state.welcomeEmail.length > 0 
          ? "Welcome " + this.state.welcomeEmail
          : "Login"}</h1>
        <form>
          <input onChange={this.handleInput} name="email" value={this.state.email} type="text"/>
          <input onChange={this.handleInput} name="password" value={this.state.password} type="password"/>
          <button onClick={this.handleFormSubmit}>Login</button>
          <button onClick={this.handleFormLogout}>Logout</button>
        </form>
      </div>
    );
  }
}

export default User;
