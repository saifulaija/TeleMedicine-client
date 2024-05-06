"use client"

import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SpecialtyModal from "./components/SpecialtyModal";
import { useState } from "react";

const SpecialtiesPage = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <Box>
      <Stack
        spacing={{ xs: 2 }}
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button onClick={()=>setIsModalOpen(true)}>Create Specialty</Button>
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
    </Box>
  );
};

export default SpecialtiesPage;
