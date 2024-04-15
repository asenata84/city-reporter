"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import Card from "@/app/home-page/card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SearchBox from "./searchbox";
import { useState } from "react";
import './card.css';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
    // Search logic here
  };

  const handleGo = () => {
    // Logic for 'GO' button
  };

  const handleCreateNew = () => {
    // Logic for 'CREATE NEW' button
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
      <SearchBox
        onSeach={handleSearch}
        onGo={handleGo}
        onCreateNew={handleCreateNew}
      />
      {/* Render search results based on searchTerm */}
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
