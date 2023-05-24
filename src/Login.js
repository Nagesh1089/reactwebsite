import React from 'react';
import  { useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import Messages from '../src/movie.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Login = () => {

     // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };


  const [post, setPost] = React.useState(null);
  console.log(post);
  React.useEffect(() => {
    axios.get("http://localhost:8080/aao/receive").then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;


  const handleSubmit = (event) => {
    //Prevent page reload

    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = post.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
        
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          {/* <label>Username </label> */}
          {/* <input type="text" name="uname" required /> */}
         <br /> <TextField type="text" name="uname" label="Username1" required/>
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          {/* <label>Password </label> */}
          {/* <input type="password" name="pass" required /> */}
          <br />  <TextField type="password" name="pass" label="Password1" required/>
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          {/* <input type="submit" /> */}
          <br />  <TextField type="submit" required style={{color: "red"}} />
        </div>
      </form>

     
    </div>
  );


  return (
    <div className='login'>Login
                   <div className="login-form">
                    
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>

      {console.log(Messages)}
      {Messages.map((item)=>
      {
        return(<div style={{"text-align":"center"}}>
          {/* {<img src={item.Poster} width='20%' height='20%'/>} */}
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.Poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
            {item.Title}
            
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>)
      })}
      
    </div>
  );
}

export default Login;