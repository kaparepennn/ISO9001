import React, { useState } from 'react';
import { Typography, TextField, Button, Box, List, ListItem, ListItemText } from '@mui/material';

export default function CompanyRegistration() {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({ name: '', contact: '', email: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.contact || !form.email) return;
    setCompanies([...companies, { id: Date.now(), ...form }]);
    setForm({ name: '', contact: '', email: '' });
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Registro de Empresas
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
        <TextField
          label="Nombre de la empresa"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Persona de contacto"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Correo electrónico"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          sx={{ mb: 2 }}
          type="email"
        />
        <Button variant="contained" type="submit">Registrar empresa</Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Empresas registradas
      </Typography>
      <List>
        {companies.map(c => (
          <ListItem key={c.id} divider>
            <ListItemText
              primary={c.name}
              secondary={`Contacto: ${c.contact} | Email: ${c.email}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}