import React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Model(props) {

  const arr = []

  Object.values(props.selected).map((val,indx)=>{
    arr.push(val)
  })



  return (
    <React.Fragment>
      <Title>AI Model Used</Title>
      <Typography component="p" variant="h6">
        {props.selected ? arr[3] : ''}
      </Typography>
    </React.Fragment>
  );
}