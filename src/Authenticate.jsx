import { useState } from 'react';

const Authenticate = ({token}) => {
  const API_URL = 'https://fsa-jwt-practice.herokuapp.com/authenticate';
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async() => {
    try{
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      const json = await response.json();
      //console.log(`This is what we're looking for`, json);
      setSuccessMessage(json);
      //console.log(`Test`, successMessage);
    } catch (error) {
      setError(error.message);
    }
  }
  return(
    <>
      <h1>Authenticate </h1>
      {successMessage && <p>{successMessage.message} <br/> Your username: {successMessage.data.username}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  )
}

export default Authenticate;