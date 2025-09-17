import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  TextField,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const roles = ['Admin', 'Gestor Calidad', 'Desarrollador', 'Tester', 'Auditor'];

const initialForm = {
  username: '',
  email: '',
  role: '',
};

export default function Users() {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('users');
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState(initialForm);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.username.trim() || !form.email.trim() || !form.role) {
      alert('Completa todos los campos');
      return;
    }

    if (editId) {
      setUsers(users.map(u => (u.id === editId ? { ...form, id: editId } : u)));
      setEditId(null);
    } else {
      setUsers([...users, { ...form, id: Date.now() }]);
    }
    setForm(initialForm);
  }

  function handleEdit(id) {
    const u = users.find(user => user.id === id);
    if (u) {
      setForm(u);
      setEditId(id);
    }
  }

  function handleDelete(id) {
    if (window.confirm('¿Eliminar este usuario?')) {
      setUsers(users.filter(u => u.id !== id));
    }
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Usuarios y Roles
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
          <TextField
            label="Usuario"
            name="username"
            value={form.username}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            fullWidth
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="select-role-label">Rol</InputLabel>
            <Select
              labelId="select-role-label"
              name="role"
              value={form.role}
              label="Rol"
              onChange={handleChange}
            >
              {roles.map(r => (
                <MenuItem key={r} value={r}>
                  {r}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" type="submit">
            {editId ? 'Actualizar usuario' : 'Agregar usuario'}
          </Button>
          {editId && (
            <Button
              variant="outlined"
              sx={{ ml: 1 }}
              onClick={() => {
                setForm(initialForm);
                setEditId(null);
              }}
            >
              Cancelar
            </Button>
          )}
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        Usuarios registrados
      </Typography>

      <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell>Usuario</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No hay usuarios registrados.
                </TableCell>
              </TableRow>
            )}
            {users.map(u => (
              <TableRow key={u.id}>
                <TableCell>{u.username}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => handleEdit(u.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(u.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}