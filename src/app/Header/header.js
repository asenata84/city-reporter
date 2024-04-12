import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import "../Header/header.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

export const metadata = {
  title: "City Reporter",
  description: "Application for reporting problems in the urban environment",
};
const logedIn = false;

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          City Reporter
        </Typography>
        {!logedIn ? (
          <Link href="/signIn">
            <button className="nav-button">Sign in</button>
          </Link>
        ) : (
          <Link href="/">
            <button className="nav-button-Sign-out">Sign out</button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
