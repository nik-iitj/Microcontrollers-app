import React from 'react'
import Typography from '@mui/material/Typography';
import Title from './Title';

function Power(props) {


  const arr = []

  Object.values(props.selected).map((val,indx)=>{
    arr.push(val)
  })

    return (


        <React.Fragment>
          <Title>Power Consumption/Voltage</Title>
          <Typography component="p" variant="h5">
            {props.selected ? arr[5] : ''}
          </Typography>
        </React.Fragment>
      );
}

export default Power