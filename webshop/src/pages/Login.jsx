import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from '../store/AuthContext';

const Login = () => {
  const [message, setMessage] = useState("");
  const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAW3o4S3C5i4AVvx6piC1Zwat9cgWoqY5E";
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const login = () => {

    const userData = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value,
      "returnSecureToken": true
    }

    fetch(url, {"method": "POST", "body": JSON.stringify(userData)})
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          setMessage(json.error.message);
        } else {
          navigate("/admin");
          authCtx.login(json.idToken);
        }
      })
  }

  return (
    <div>
      <div>{message}</div>
      <label>E-mail</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Parool</label> <br />
      <input ref={passwordRef} type="password" /> <br />
      <button onClick={login}>Logi sisse</button>
    </div>
  )
}

export default Login