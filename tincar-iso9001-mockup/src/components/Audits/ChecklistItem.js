import React from 'react';
import { ListItem, ListItemText } from '@mui/material';

export default function ChecklistItem({ item }) {
  return (
    <ListItem divider>
      <ListItemText
        primary={item.checkName}
        secondary={`Fecha: ${item.date} | Hora: ${item.time} | Realizado a: ${item.personChecked}`}
      />
    </ListItem>
  );
}