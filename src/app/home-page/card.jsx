import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import cardImage from "./image.png";
import './card.css';

const imgStyle = {
    aspectRatio: 1,
    objectFit: 'cover'
}

const cardTextStyle = {
    fontSize: 18,
    lineHeight: '16px'
}

export default function Card() {
    return (
        <>
            <Grid item xs={4} sx={{
                width: 200
            }}>
                <Paper elevation={2} sx={{
                    padding: 1.5,
                    borderRadius: 4,
                    background: '#e0e0e0'
                }}>
                    <Image
                        src={cardImage}
                        width={1000}
                        height={1000}
                        alt=""
                        style={imgStyle}
                    />
                    <Box marginTop={2.5} marginBottom={1.5}>
                        <Typography variant="button" style={cardTextStyle}>
                            Lorem ipsum est dolar sit ammet
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </>
    );
}