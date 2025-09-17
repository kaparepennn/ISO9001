import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialForm = {
  razonSocial: '',
  numeroEmpresa: '',
  nit: '',
  email: '',
  representanteLegal: '',
  paginaWeb: '',
  sectorEconomico: '',
  tipoEmpresa: '',
  direccion: '',
  redesSociales: '',
};

export default function Companies() {
  const [companies, setCompanies] = useState(() => {
    const saved = localStorage.getItem('companies');
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem('companies', JSON.stringify(companies));
  }, [companies]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !form.razonSocial.trim() ||
      !form.numeroEmpresa.trim() ||
      !form.nit.trim() ||
      !form.email.trim()
    ) {
      alert('Por favor complete los campos obligatorios: Razón social, Número de empresa, NIT y Email');
      return;
    }

    if (editId) {
      setCompanies(companies.map(c => (c.id === editId ? { ...form, id: editId } : c)));
      setEditId(null);
    } else {
      setCompanies([...companies, { ...form, id: Date.now() }]);
    }
    setForm(initialForm);
  }

  function handleEdit(id) {
    const company = companies.find(c => c.id === id);
    if (company) {
      setForm(company);
      setEditId(id);
    }
  }

  function handleDelete(id) {
    if (window.confirm('¿Seguro que deseas eliminar esta empresa?')) {
      setCompanies(companies.filter(c => c.id !== id));
    }
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Registro de Empresas
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Razón social *"
                name="razonSocial"
                value={form.razonSocial}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Número de empresa *"
                name="numeroEmpresa"
                value={form.numeroEmpresa}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="NIT *"
                name="nit"
                value={form.nit}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Email *"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Representante Legal"
                name="representanteLegal"
                value={form.representanteLegal}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Página web"
                name="paginaWeb"
                value={form.paginaWeb}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Sector Económico"
                name="sectorEconomico"
                value={form.sectorEconomico}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Tipo de empresa"
                name="tipoEmpresa"
                value={form.tipoEmpresa}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Dirección"
                name="direccion"
                value={form.direccion}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Redes Sociales"
                name="redesSociales"
                helperText="Ejemplo: Facebook, LinkedIn, Twitter"
                value={form.redesSociales}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Box mt={2}>
            <Button variant="contained" color="primary" type="submit">
              {editId ? 'Actualizar empresa' : 'Registrar empresa'}
            </Button>
            {editId && (
              <Button
                sx={{ ml: 1 }}
                variant="outlined"
                onClick={() => {
                  setForm(initialForm);
                  setEditId(null);
                }}
              >
                Cancelar
              </Button>
            )}
          </Box>
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Empresas registradas
      </Typography>

      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader size="small" aria-label="empresas registradas">
          <TableHead>
            <TableRow>
              <TableCell>Razón social</TableCell>
              <TableCell>Número empresa</TableCell>
              <TableCell>NIT</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Representante legal</TableCell>
              <TableCell>Página Web</TableCell>
              <TableCell>Sector Económico</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Redes Sociales</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map(c => (
              <TableRow key={c.id}>
                <TableCell>{c.razonSocial}</TableCell>
                <TableCell>{c.numeroEmpresa}</TableCell>
                <TableCell>{c.nit}</TableCell>
                <TableCell>{c.email}</TableCell>
                <TableCell>{c.representanteLegal}</TableCell>
                <TableCell>{c.paginaWeb}</TableCell>
                <TableCell>{c.sectorEconomico}</TableCell>
                <TableCell>{c.tipoEmpresa}</TableCell>
                <TableCell>{c.direccion}</TableCell>
                <TableCell>{c.redesSociales}</TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => handleEdit(c.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(c.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {companies.length === 0 && (
              <TableRow>
                <TableCell colSpan={11} align="center">
                  No hay empresas registradas.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}