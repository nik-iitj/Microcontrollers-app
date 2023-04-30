import React from 'react'
import Typography from '@mui/material/Typography';
import Title from './Title';

function Specification(props) {

  const arr = []

  Object.values(props.selected).map((val,indx)=>{
    arr.push(val)
  })

    return (
        <React.Fragment>
          <Title>Task(s) Demonstrated</Title>
          <Typography component="p" variant="h5">
            {props.selected ? arr[2] : ''}
          </Typography>
        </React.Fragment>
      );
}

export default Specification