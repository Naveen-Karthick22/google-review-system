import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button, TextField } from "@mui/material";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export default function CreateSurvey() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState("");

  const handleCreate = async () => {
    await axios.post(`${API_URL}/surveys/`, { title, questions_text: questions });
    setTitle("");
    setQuestions("");
    alert("Survey created successfully!");
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Create New Survey
          </Typography>
          <TextField label="Title" fullWidth sx={{ mb: 2 }} value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField
            label="Questions"
            fullWidth
            multiline
            rows={3}
            sx={{ mb: 2 }}
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
          />
          <Button variant="contained" sx={{ backgroundColor: "#1A73E8" }} onClick={handleCreate}>
            Create Survey
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
