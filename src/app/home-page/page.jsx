"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import Card from "@/app/home-page/card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
        <Box>
            <Grid container spacing={4}>
                <Card />
                <Card />
                <Card />
                <Card />
            </Grid>
        </Box>
      <Link href="/reports">
        <Button variant="contained">Reports</Button>
      </Link>
    </main>
  );
}
