import { useState } from 'react';
import './signUp.css';

const SignUpForm = ({token, setToken}) => {
  const BASE_API_URL = 'https://fsa-jwt-practice.herokuapp.com/signup';
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const response = await fetch(BASE_API_URL, 
        {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify ({
            username: userName,
            password: password,
          })
        });
      const json = await response.json();
      //console.log(json);
      setToken(json.token);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h3> Login </h3>
      {error && <p>{error}</p>}
      <section id="login">
        <form onSubmit={handleSubmit}>
          <label>Username: 
          <input 
            type="username"
            autoComplete="username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          </label>
          <br />
          <br />
          <div>
            <label>Password:  
              <input 
                type={showPassword ? "text" : "password"}
                autoComplete='new-password'
                value={password}
                onChange={(event) =>{
                  setPassword(event.target.value);
                }}   
              /> 
            </label>
            <br />
            <label>Show Password</label>
            <input 
              id="check"
              type="checkbox"
              value={showPassword}
              onChange={() => {
                setShowPassword((prev) => !prev)
              }}
            />
          </div>
          <button id="signupbutton">Sign up</button>
        </form>
        <div>
          <img src="src/assets/0.png" ></img>
        </div>
      </section>
      
    </>
  )
}

export default SignUpForm;