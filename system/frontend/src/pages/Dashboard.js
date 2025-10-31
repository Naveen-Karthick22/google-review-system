import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

const API_URL = "http://127.0.0.1:8000";

export default function Dashboard() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/surveys/`).then((res) => setSurveys(res.data));
  }, []);

  const total = surveys.length;
  const approved = surveys.filter((s) => s.status === "Approved").length;
  const pending = total - approved;

  const cards = [
    { title: "Total Surveys", value: total, color: "#1A73E8" },
    { title: "Approved", value: approved, color: "#34A853" },
    { title: "Pending", value: pending, color: "#FBBC05" },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        {cards.map((c, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card sx={{ borderTop: `5px solid ${c.color}`, borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" color="text.secondary">
                    {c.title}
                  </Typography>
                  <Typography variant="h4" sx={{ color: c.color, fontWeight: 700 }}>
                    {c.value}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
