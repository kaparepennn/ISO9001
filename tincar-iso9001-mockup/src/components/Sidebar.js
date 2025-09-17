import React from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
/*import WarningIcon from '@mui/icons-material/Warning';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';*/
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import BusinessIcon from '@mui/icons-material/Business';

const drawerWidth = 280;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Documentos', icon: <DescriptionIcon />, path: '/documents' },
  /*{ text: 'Incidencias y No Conformidades', icon: <WarningIcon />, path: '/incidences' },
  { text: 'Procesos', icon: <AccountTreeIcon />, path: '/processes' },
  { text: 'Satisfacción del Cliente', icon: <EmojiPeopleIcon />, path: '/satisfaction' },*/
  { text: 'Capacitación', icon: <SchoolIcon />, path: '/trainings' },
  { text: 'Auditorías', icon: <CheckCircleIcon />, path: '/audits' },
  { text: 'Empresas', icon: <BusinessIcon />, path: '/companies' },
  { text: 'Usuarios y roles', icon: <SettingsIcon />, path: '/users' }, // usa users aquí para config
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          bgcolor: 'background.paper',
          color: 'text.primary',
        },
      }}
    >
      <Toolbar sx={{ height: 64, display: 'flex', alignItems: 'center', px: 2 }}>
        {/* Logo sencillito con texto */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            component="img"
            src="https://cdn-icons-png.flaticon.com/512/743/743007.png"
            alt="Logo TinCar"
            sx={{ width: 36, height: 36 }}
          />
          <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            TinCar
          </Typography>
        </Box>
        <Typography sx={{ ml: 1, fontSize: 12, fontWeight: 'bold', color: 'text.secondary' }}>
          SGC TinCar - ISO 9001
        </Typography>
      </Toolbar>
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItemButton
            key={text}
            component={NavLink}
            to={path}
            sx={{
              '&.active': {
                bgcolor: 'primary.main',
                color: 'background.default',
                '& svg': { color: 'background.default' },
              },
            }}
          >
            <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}