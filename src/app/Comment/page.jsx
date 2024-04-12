"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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
      
      <h2 style={{marginLeft: '460px',padding: '10px'}}> Add your comment here:</h2>
      <form onSubmit={handleSubmit}>
      <center>
        <TextField
          multiline
          rows={7}
          placeholder="Text....."
          value={comment}
          onChange={handleChange}
          style={{ width: '40%' }}
          sx={{ backgroundColor: 'white', marginBottom: '-15px', borderRadius: 5 }}
        />
        </center>
       
        <br />
        <center>
        <Button 
        type="submit"
         variant="contained" 
         color="primary"
         sx={{ borderRadius: 0 , marginLeft: '530px' }} >
          SUBMIT
        </Button>
        </center>
      </form>
      
      <div>
      
      
        <h3 style={{  marginLeft: '460px' }} >Comments:</h3>
        <List sx={{  marginLeft: '450px' }} >
          { 
             
           commentsList.map((comment, index) => (
            <ListItem key={index}>
              <ListItemText primary={comment} />
            </ListItem>
            
            ))
          
          }
        </List>
        
      </div>
    </div>
    
  );
  
};

export default CommentBox;