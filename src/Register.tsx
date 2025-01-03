import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  Button,
  TextField,
  Typography,
} from "@mui/material";
import Logo from './Components/Logo';
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let toggleFail = false;
  
  const handleRegister = () => {
    //e.preventDefault();
    Promise.resolve(axios.post("https://npcroom-backend.onrender.com/register", {
        email: email,
        username: username,
        password: password
    })).then((response) => {
      console.log(response.data);
      if(response.data === "Failure") {
        toggleFail = true;
      } else {
        navigate("/personality");
      }
    }).catch((err) => {
      console.error("failed", err.message);
    })
  }
  return (
    <>
      <Logo />
      <div id="registerBox">
        <Typography id="registerText">Register</Typography>
        <TextField
          className="registerField"
          required
          margin="normal"
          label="Email"
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="registerField"
          required
          margin="normal"
          label="User Name"
          variant="filled"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          className="registerField"
          required
          margin="normal"
          label="Password"
          variant="filled"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Button
          id="registerButton"
          type="submit"
          variant="contained"
          onClick={handleRegister}
        >
          Register
        </Button>
        {toggleFail && <Typography>Email is already in use</Typography>}
      </div>
    </>
  );
}

export default Register;
