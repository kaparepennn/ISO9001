import React from 'react';
import { Typography, Grid, Paper, LinearProgress, Box } from '@mui/material';

const dataMock = {
  projectsOnTime: 85,
  incidentsResolvedOnTime: 78,
  customerSatisfaction: {
    average: 4.2, // Promedio sobre 5
    trend: [4, 4.1, 4.2, 4.3, 4.2], // últimos meses
  },
  nonConformitiesOpen: 3,
  tasksStatus: {
    development: { todo: 5, inProgress: 8, done: 12 },
    testing: { todo: 3, inProgress: 5, done: 15 },
  },
};

function renderTasksStatus(status) {
  return (
    <>
      <Typography>To Do: {status.todo}</Typography>
      <Typography>In Progress: {status.inProgress}</Typography>
      <Typography>Done: {status.done}</Typography>
    </>
  );
}

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Proyectos entregados a tiempo */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Proyectos entregados a tiempo</Typography>
            <Typography variant="h3" color="primary" gutterBottom>
              {dataMock.projectsOnTime}%
            </Typography>
            <LinearProgress variant="determinate" value={dataMock.projectsOnTime} />
          </Paper>
        </Grid>

        {/* Incidencias resueltas */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Incidencias resueltas dentro del plazo</Typography>
            <Typography variant="h3" color="primary" gutterBottom>
              {dataMock.incidentsResolvedOnTime}%
            </Typography>
            <LinearProgress variant="determinate" value={dataMock.incidentsResolvedOnTime} />
          </Paper>
        </Grid>

        {/* Satisfacción del cliente */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">Nivel de satisfacción del cliente (promedio)</Typography>
            <Typography variant="h3" color="primary" gutterBottom>
              {dataMock.customerSatisfaction.average} / 5
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Últimos meses:{' '}
              {dataMock.customerSatisfaction.trend.map((val, i) => (
                <span key={i}>{val}{i < dataMock.customerSatisfaction.trend.length -1 ? ', ' : ''}</span>
              ))}
            </Typography>
          </Paper>
        </Grid>

        {/* No conformidades abiertas */}
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6">No conformidades abiertas</Typography>
            <Typography variant="h2" color="error" gutterBottom>
              {dataMock.nonConformitiesOpen}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}