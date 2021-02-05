import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TimeEntriesTable from './TimeEntriesTable';
import ControlPanel from './ControlPanel';

export default function Base() {
    return (
      <React.Fragment>
        <CssBaseline />

        <Container maxWidth="lg" style={{ backgroundColor: '#F0F0F0', height: '100vh' }} >
          <ControlPanel />
          <TimeEntriesTable />
        </Container>

      </React.Fragment>
    );
}