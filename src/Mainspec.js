import React from 'react'
import Typography from '@mui/material/Typography';
import Title from './Title';

function Mainspec(props) {

  const arr = []

  Object.values(props.selected).map((val,indx)=>{
    arr.push(val)
  })

    return (
        <React.Fragment>
          <Title>Specifications of the board/kit</Title>
          <Typography component="p" variant="h6">
            {props.selected ? arr[1] : ''}
          </Typography>
        </React.Fragment>
      );
}

export default Mainspec