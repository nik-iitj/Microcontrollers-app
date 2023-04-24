import React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Model(props) {



  return (
    <React.Fragment>
      <Title>AI Model Used</Title>
      <Typography component="p" variant="h6">
        {props.selected ? props.selected[3] : ''}
      </Typography>
    </React.Fragment>
  );
}