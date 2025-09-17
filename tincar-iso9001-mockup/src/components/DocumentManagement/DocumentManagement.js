import React, { useState } from 'react';
import { Typography, Box, Button, List, ListItem, ListItemText, TextField, Link } from '@mui/material';

export default function DocumentManagement() {
  // Simulación: documentos subidos localmente (no suben pero si listan)
  const [docs, setDocs] = useState([
    { id: 1, name: 'Procedimiento_ISO9001.pdf', source: 'Local' },
    { id: 2, name: 'Manual_TinCar.docx', source: 'Drive' },
  ]);
  const [uploadName, setUploadName] = useState('');

  function handleAddDoc(e) {
    e.preventDefault();
    if(uploadName.trim() === '') return;
    setDocs([...docs, { id: Date.now(), name: uploadName, source: 'Local' }]);
    setUploadName('');
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Gestión de Documentos
      </Typography>

      <Box component="form" onSubmit={handleAddDoc} sx={{ mb: 3 }}>
        <TextField
          label="Nombre del documento"
          value={uploadName}
          onChange={e => setUploadName(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" type="submit">Subir documento (simulado)</Button>
      </Box>

      <Typography variant="h6">Documentos disponibles:</Typography>
      <List>
        {docs.map(doc => (
          <ListItem key={doc.id} divider>
            <ListItemText primary={doc.name} secondary={`Fuente: ${doc.source} - `} />
            {doc.source === 'Drive' ? (
              <Link href="#" underline="hover">Exportar</Link>
            ) : (
              <Button variant="outlined" size="small">Descargar</Button>
            )}
          </ListItem>
        ))}
      </List>

      <Typography variant="body2" color="textSecondary" mt={4}>
        * Para integración con Google Drive u otros, se necesita backend o integración API, pero para este mockup se simula.
      </Typography>
    </Box>
  );
}