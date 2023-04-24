import React,{useEffect,useState} from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import MemoryIcon from '@mui/icons-material/Memory';
import * as XLSX from 'xlsx';




export default function Microcontrollers(props){

  const [data,setData] = useState({})


  useEffect(() => {

    
      const readFile = async () => {

        try {
  
          const file = await fetch('ml.xlsx');
          const arrayBuffer = await file.arrayBuffer();
          const data = new Uint8Array(arrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          setData(excelData)
          Output()
        } catch (error) {
          console.log(error);
        }
      };
  
      readFile();

      


  }, []);


  function update(arg){

    props.onSubmit(arg)

  }


  function Output(){

    return (
      <div>

    {Object.values(data).map(function(item,indx){
      if(item.length>1 && indx>0){
        return(
          <ListItemButton>
          <ListItemIcon>
            <MemoryIcon />
          </ListItemIcon>
          <ListItemText primary={item[0]} onClick={()=>{update(item)}} key={indx}/>
          </ListItemButton>
        )}})
    }

      </div>    

    )

  }




  return(


  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved Microcontrollers
    </ListSubheader>

    <Output/>

  </React.Fragment>


  )

}
