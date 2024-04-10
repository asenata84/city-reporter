"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import React from "react";

export default function Login() {
  return (
    <center>
      <main className="flex min-h-screen flex-col items-center p-24">
        <Box
          component="section"
          sx={{ borderRadius: 1, p: 5, border: "1px solid grey" }}
        >
          <h1 style={{ fontSize: 30, padding:30 }}>Sign In</h1>
          <TextField
            type="email"
            id="filled-basic"
            label="Email..."
            variant="filled"
            sx={{ width: 300, borderRadius: 15 }}
          />

          <div className="blank"></div>
          <TextField
            type="password"
            id="filled-basic"
            label="Password..."
            variant="filled"
            sx={{ width: 300 }}
          />
          <div className="blank"></div>
          <Link href="/">
            <Button color="success" sx={{ width: 300 }} variant="contained">
              Enter
            </Button>
          </Link>

          <div className="blank">OR</div>

          <Link href="/signup">
            <Button sx={{ width: 300 }} variant="contained">
              Sign Up
            </Button>
          </Link>
        </Box>
      </main>
    </center>
  );
}
