import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import "./LoginForm.css";
import { setAuth, setUsers } from "../../store/action/userAction";
import { useHistory } from "react-router";
import {url} from '../../urlConfig'
import {axios} from 'axios'

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const history = useHistory();

  useEffect(() => {
    dispatch(setUsers());
  }, []);

  function LoginAuth(e) {
    // e.prevent.default()

    // axios.get(`${url}/users`,{email,password})
    // .then(res=>{
    //   localStorage.setItem('access_token', res.data.accessToken)
    //   dispatch(setAuth(true))
    //   setEmail('')
    //   setPassword('')
    //   history.push('/')
    // })
    // .catch(err=>{
    //   console.log(err)
    // })


    // GIVE UP 

    if (email !== users.email && password !== users.password) {
      alert("user tidak terdaftar");
    } else {
      history.push("/");
    }
  }

  return (
    <div className="LoginForm">
        {/* {JSON.stringify(users)} */}
      <h3>Login Page</h3>
      <form onSubmit>
        <TextField
          variant="outlined"
          value={email}
          label="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          value={password}
          label="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={() => {
            LoginAuth();
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}
