import React from 'react'
import Typography from '@mui/material/Typography';
import Title from './Title';

function Specification(props) {

    return (
        <React.Fragment>
          <Title>Task(s) Demonstrated</Title>
          <Typography component="p" variant="h5">
            {props.selected ? props.selected[2] : ''}
          </Typography>
        </React.Fragment>
      );
}

export default Specification