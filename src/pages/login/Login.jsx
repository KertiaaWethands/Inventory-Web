import {
  Container,
  FormControl,
  TextField,
  Button
} from "@mui/material";
import styles from "./style.module.css";
import { SectionImage } from "../../components/SectionImage";

export const Login = () => {
  
  return (
    <SectionImage
      src="Assets/Login/bg_login.png"
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
            InputProps={{
              style: { background: 'white' } // Setel gaya CSS untuk warna background putih
            }}
            InputLabelProps={{
              style: { fontWeight: 'bold', color: 'black'}
            }}
            
          />

          <TextField 
            type="password"
            size="small"
            label="Password"
            variant="outlined"
            fullWidth
            InputProps={{
              style: { background: 'white' } // Setel gaya CSS untuk warna background putih
            }}
            InputLabelProps={{
              style: { fontWeight: 'bold', color: 'Black' }
            }}
          />
          <Button className={styles.button}
            style={{ alignSelf: "flex-center", paddingInline: "40px" }}
            variant="contained"
          >
            Masuk
          </Button>
        </FormControl>
      </Container>
    </SectionImage>
  );
};
