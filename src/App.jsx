import { useState } from 'react';
import Authenticate from './Authenticate';
import SignUpForm from './SignUpForm';
import './signUp.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <h1>Welcome!</h1>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  );
}

export default App;
