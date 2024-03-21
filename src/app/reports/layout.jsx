import { Inter } from "next/font/google";
import "../globals.css";

import * as React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "City Reporter",
  description: "Application for reporting problems in the urban environment"
};

export default function RootLayout({ children }) {
  return (
      <div className={inter.className}>
        Reports Layout
        {children}
      </div>
  );
}
