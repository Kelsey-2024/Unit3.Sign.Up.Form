import { useState } from 'react';

const SignUpForm = () => {
  const BASE_API_URL = 'https://fsa-jwt-practice.herokuapp.com/signup';
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
      console.log(json);
    } catch (error) {
      setError("Error with sign up form", error);
    }
  }
  return (
    <>
      <h2> sign up! </h2>
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
        <label>Password: 
          <input 
            type="password"
            value={password}
            onChange={(event) =>{
              setPassword(event.target.value);
            }} 
          />
        </label>
        <button>Submit</button>
      </form>
      <button type="show password button" aria-label="Show password">
        <div className="eye-icon"></div>
      </button>
    </>
  )
}

export default SignUpForm;