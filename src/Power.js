import React from 'react'
import Typography from '@mui/material/Typography';
import Title from './Title';

function Power(props) {

    return (
        <React.Fragment>
          <Title>Power Consumption/Voltage</Title>
          <Typography component="p" variant="h5">
            {props.selected ? props.selected[5] : ''}
          </Typography>
        </React.Fragment>
      );
}

export default Power