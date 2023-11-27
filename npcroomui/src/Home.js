import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
import Button from '@mui/material/Button';
import { Box, Typography } from "@mui/material";
import NPCLogo from './NPCLogo.png';



const Home = (props) => {
  const navigate = useNavigate();

  return (

    <Box className="Home-header" >
      <Box sx={{
        display: 'flex',    // Enables Flexbox
        alignItems: 'center', // Vertically aligns items in the center
        justifyContent: 'center', // Horizontally aligns items at the start
        gap: '20px',       // Optional: adds space between items
        // Other styling as needed
      }}>
        <Typography variant="h2" sx={{
          padding: '20px', // Add padding on top
          margin: '20px',  // Push downward 
        }}
          className="Home_title">Welcome to the NPCRoom!


        </Typography>

        <img src={NPCLogo} alt="NPC Logo" className="logoImage"></img>

      </Box>

      
      {<img src="https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png" className="image" alt="NPC"></img>}
      <Typography variant="h6" className="body" color={"black"}
        sx={{
          margin: '10px',
          padding: '25px',
        }
        }>The NPCRoom is a NPC chatroom that allows
        users to type in the chat and get a pre-populated
        response from an NPC.
      </Typography>

      <Button
        variant="outlined"
        color="secondary"
        sx={{
          padding: '10px 20px', // Custom padding
          border: 2,
          transition: 'all 0.2s ease',
          '&:hover': {
            opacity: '70%',
            boxShadow: 3,
            border: 2,

          },


        }}

        onClick={() => navigate("/chat")}
      >
        Get Started
      </Button>

    </Box>

  );
};

export default Home;