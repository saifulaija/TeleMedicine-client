"use client";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SpecialtyModal from "./components/SpecialtyModal";
import { useState } from "react";
import { useDeleteSpecialtyMutation, useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import ClearIcon from "@mui/icons-material/Clear";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const[specialtyDelete]=useDeleteSpecialtyMutation()
  const handleDelete=async(id:string)=>{
   try {
    const res=await specialtyDelete(id).unwrap();
    if(res?.id){
      toast.success("specialty deleted successfully")
    }
   } catch (err:any) {
    console.log(err?.message)
    
   }
  }

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width:400 },

    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      headerAlign:"center",
      align:"center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row.icon} alt="icon" width={30} height={30} />
          </Box>
        );
      },
    },

    {
      field: "Action",
      headerName: "Action",
      headerAlign:"center",
      align:"center",
      flex: 1,
      
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={()=>handleDelete(row?.id)} aria-label="delete">
            <ClearIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack
        spacing={{ xs: 2 }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
        {/* <TextField size='small' placeholder='Search specialist...' /> */}
        <SpecialtyModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          size="small"
          sx={{ borderRadius: "20px" }} // Now it should work
          placeholder="Search specialist..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      {!isLoading ? (
        <Box sx={{ my: 3 }}>
          <DataGrid rows={data} columns={columns} hideFooter />
        </Box>
      ) : (
        <h1>Loading.........</h1>
      )}
    </Box>
  );
};

export default SpecialtiesPage;
