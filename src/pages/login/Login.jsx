import React, { useState } from 'react';
import { Container, FormControl, TextField, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "./style.module.css";
import { SectionImage } from "../../components/SectionImage";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/user/login', {
        username,
        password
      });

      if (response.data.success) {
        alert('Login successful');
        navigate('/product-inventory'); // redirect ke halaman utama
      } else {
        alert('Login failed');
      }
    } catch (error) {
      alert('An error occurred while logging in');
    }
  };

  return (
    <SectionImage
      src="Asset/Login/bg_login.png"
      alt="banner"
      objectPosition="center"
    >
      <Container className={styles.container}>
        <FormControl className={styles.form}>
          <TextField
            type="text"
            size="small"
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={e => setUsername(e.target.value)}
            InputProps={{ style: { background: 'white' }}}
            InputLabelProps={{ style: { fontWeight: 'bold', color: 'black'} }}
          />

          <TextField 
            type="password"
            size="small"
            label="Password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={e => setPassword(e.target.value)}
            InputProps={{ style: { background: 'white' }}}
            InputLabelProps={{ style: { fontWeight: 'bold', color: 'Black' }}}
          />

          <Button
            className={styles.button}
            style={{ alignSelf: "flex-center", paddingInline: "40px" }}
            variant="contained"
            onClick={handleLogin}
          >
            Masuk
          </Button>
        </FormControl>
      </Container>
    </SectionImage>
  );
};
