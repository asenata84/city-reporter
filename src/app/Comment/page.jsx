"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';


const CommentBox = () => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== '') {
      setCommentsList([...commentsList, comment]);
      setComment('');
    }
  };

  
  return (
    
    <div>
      <div>

      <h3 style={{  marginLeft: '180px' }} >Comments:</h3>
      <List sx={{  marginLeft: '190px' }} >
        {  
         commentsList.map((comment, index) => (
          <ListItem key={index}>
            <Box component="section"
            sx = {{
                borderRadius: 1,
                border: "1px solid grey", 
                backgroundColor:"#bfbdbd" }} 
            >
            <ListItemText primary={comment} />
            </Box>
          </ListItem>
          
          ))
        
        }
      </List>
      
    </div>
      <h2 style={{marginLeft: '180px',padding: '10px'}}> Add your comment here:</h2>
      <form onSubmit={handleSubmit}>
      
        <TextField
          multiline
          rows={5}
          placeholder="Text....."
          value={comment}
          onChange={handleChange}
          style={{ width: '40%' }}
          sx={{ backgroundColor: 'white', marginLeft: "180px", borderRadius: 5 }}
        />
        
        <br />
        <center>
        <Button 
        type="submit"
         variant="contained" 
         color="primary"
         sx={{ borderRadius: 0 , marginLeft: '180px', marginTop:"10px" }} >
          SUBMIT
        </Button>
        </center>
      </form>
      
    </div>
    
  );
  
};

export default CommentBox;