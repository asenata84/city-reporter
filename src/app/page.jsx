"use client";
import Link from "next/link";
import Button from "@mui/material/Button";
import { Typography, Card, CardContent, CardHeader, Grid } from '@mui/material';
import { useState, useEffect } from "react";
import axios from 'axios'

export default function Home() {
  const [reports, setReports] = useState()

  useEffect(() => {
    // Action will be called on initial render
    axios.get("http://localhost:3001/reports")
    .then(response => {
      console.log(response.data,'reports from response')
      setReports(response.data)
    })
    .catch(error => console.error(error,'error'))

  }, [])

  console.log(reports,'reports from state')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
      {/* {reports.map(report => <div>{report.title}</div>)} */}

      <Grid container spacing={3}>
          {reports && reports?.map(report => (
                <Grid item xs={12} sm={6} md={4} key={report.id}>
                  <Card>
                    <CardHeader title={report.title} subheader={report.location} />
                    <CardContent>
                      <Typography variant="body1">Description:{report.description}</Typography>
                      <Typography variant="body1">Status: {report.status}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
          ))}
      </Grid>

      <Link href="/reports">
        <Button variant="contained">Reports</Button>
      </Link>
    </main>
  );
}
