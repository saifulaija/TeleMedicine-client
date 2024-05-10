import { Box, Container } from '@mui/material'
import React from 'react'

const DoctorsPage = async() => {

    const res =await fetch('http://localhost:5000/api/v1/doctors');
    const {data}=await res.json();
    console.log(data)
  return (
   
    <Container>
        <Box sx={{
            borderBottom:"2px dashed",
            borderColor:"secondary.light",
            my:4
        }}/>


       <Box sx={{mt:2, p:3,bgcolor:'secondary.50'}}>

       </Box>
    </Container>
  )
}

export default DoctorsPage