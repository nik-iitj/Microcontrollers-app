import React,{useEffect,useState} from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Speed(props) {



  return (
    <React.Fragment>
      <Title>Achieved speed(clk frequency)</Title>
      <Typography component="p" variant="h5">
        {props.selected ? props.selected[4] : ''}
      </Typography>
    </React.Fragment>
  );
}