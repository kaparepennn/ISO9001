import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const initialForm = {
  topic: '',
  date: '',
};

export default function Trainings() {
  const [form, setForm] = useState(initialForm);
  const [trainings, setTrainings] = useState(() => {
    const saved = localStorage.getItem('trainings');
    return saved ? JSON.parse(saved) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('trainings', JSON.stringify(trainings));
  }, [trainings]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.topic.trim() || !form.date.trim()) {
      alert('Completa los campos Tema y Fecha');
      return;
    }
    setTrainings([...trainings, { ...form, id: Date.now() }]);
    setForm(initialForm);
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Capacitación
      </Typography>

      <Paper sx={{ p: 2, mb: 3, maxWidth: 400 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Tema"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Fecha"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" type="submit">
            Registrar capacitación
          </Button>
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Capacitaciones registradas
      </Typography>

      <List sx={{ maxWidth: 400, maxHeight: 300, overflow: 'auto' }}>
        {trainings.length === 0 && <Typography>No hay capacitaciones registradas.</Typography>}
        {trainings.map(t => (
          <ListItem key={t.id} divider>
            <ListItemText primary={t.topic} secondary={`Fecha: ${t.date}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}