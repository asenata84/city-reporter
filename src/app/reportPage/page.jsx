"use client"
import CommentBox from '../Comment/page.jsx';
import Box from '@mui/material/Box';

export default function App() {
  return (
    <main>
      <Box component="section" 
      sx = {{
        borderRadius: 3, 
        p: 5, 
        border: "1px solid grey", 
        width: "300px", 
        marginLeft:"180px",
        marginTop:"10px", 
        backgroundColor: "white" }} >
      <img src = "https://t3.ftcdn.net/jpg/04/60/01/36/360_F_460013622_6xF8uN6ubMvLx0tAJECBHfKPoNOR5cRa.jpg" />
      </Box>
    < CommentBox/>
    </main>
  );
}
