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
  Checkbox,
  FormControlLabel,
  Grid,
} from '@mui/material';

const checklistItems = [
  '¿Se cumple el procedimiento X?',
  '¿Se registra y documenta la no conformidad?',
  '¿Se responde a las quejas de clientes oportunamente?',
];

const initialForm = {
  personChecked: '',
  date: '',
  time: '',
  checklistResults: {},
};

export default function Audits() {
  const [form, setForm] = useState(initialForm);
  const [records, setRecords] = useState(() => {
    const saved = localStorage.getItem('audits');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('audits', JSON.stringify(records));
  }, [records]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCheckboxChange(id, checked) {
    setForm(prev => ({
      ...prev,
      checklistResults: { ...prev.checklistResults, [id]: checked },
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.personChecked || !form.date || !form.time) {
      alert('Completa la persona, fecha y hora');
      return;
    }

    const newRecord = {
      id: Date.now(),
      ...form,
    };
    setRecords([...records, newRecord]);
    setForm(initialForm);
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Auditorías - Checklist
      </Typography>

      <Paper sx={{ p: 2, mb: 4, maxWidth: 600 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Persona inspeccionada"
            name="personChecked"
            value={form.personChecked}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <TextField
                label="Fecha"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Hora"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>

          <Typography variant="subtitle1" gutterBottom>
            Checklist:
          </Typography>

          {checklistItems.map((item, idx) => (
            <FormControlLabel
              key={idx}
              control={
                <Checkbox
                  checked={!!form.checklistResults[idx]}
                  onChange={e => handleCheckboxChange(idx, e.target.checked)}
                />
              }
              label={item}
            />
          ))}

          <Box mt={2}>
            <Button variant="contained" type="submit">
              Registrar checklist
            </Button>
          </Box>
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Registros de auditorías
      </Typography>

      <List sx={{ maxWidth: 600, maxHeight: 300, overflow: 'auto' }}>
        {records.length === 0 && <Typography>No hay registros aún.</Typography>}
        {records.map(rec => (
          <ListItem key={rec.id} divider>
            <ListItemText
              primary={`Checklist para ${rec.personChecked}`}
              secondary={`Fecha: ${rec.date} | Hora: ${rec.time} | Respuestas: ${Object.entries(rec.checklistResults)
                .map(([k, v]) => `Q${+k + 1}: ${v ? 'Sí' : 'No'}`)
                .join(', ')}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}