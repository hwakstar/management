import React from 'react';
// import { Link } from 'react-router-dom';

// material-ui
// import { Card, CardHeader, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Grid } from '@mui/material';
// project import
// import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import FileUpload from './FileUpload';

// ==============================|| SAMPLE PAGE ||============================== //

const Quick = () => {
  return (
    <>
      <Grid container spacing={gridSpacing}>
        <Grid>
          <FileUpload />
        </Grid>
      </Grid>
    </>
  );
};

export default Quick;
