import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography, Button, Grid, Chip } from "@mui/material";

const API_URL = "http://127.0.0.1:8000";

export default function ReviewSurveys() {
  const [surveys, setSurveys] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`${API_URL}/surveys/`);
    setSurveys(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const approve = async (id) => {
    await axios.post(`${API_URL}/surveys/${id}/approve`);
    fetch();
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Review & Approve Surveys
      </Typography>
      <Grid container spacing={3}>
        {surveys.map((s) => (
          <Grid item xs={12} sm={6} md={4} key={s.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
              <CardContent>
                <Typography variant="h6">{s.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.questions_text}
                </Typography>
                <Chip label={s.status} sx={{ mt: 2, backgroundColor: s.status === "Approved" ? "#34A853" : "#FBBC05", color: "white" }} />
                {s.status === "Pending" && (
                  <Button sx={{ mt: 2 }} variant="contained" color="success" onClick={() => approve(s.id)}>
                    Approve
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
