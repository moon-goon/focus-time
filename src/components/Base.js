import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TimeEntriesTable from './TimeEntriesTable';
import Timer from './Timer';

export default function Base() {
    return (
      <React.Fragment>
        <CssBaseline />

        <Container maxWidth="md" style={{ backgroundColor: '#F0F0F0', height: '100vh' }} >
          <Timer />
          <TimeEntriesTable />
        </Container>

      </React.Fragment>
    );
}