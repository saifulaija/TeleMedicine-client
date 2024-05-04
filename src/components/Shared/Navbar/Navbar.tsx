"use client";

import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar = () => {


  const AuthButton = dynamic(() => import("../UI/AuthButton/AuthButton"), {
    ssr: false,
  });
  

  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          TLEME
          <Box component="span" color="primary.main">
            MEDICINE
          </Box>
        </Typography>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Typography component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography component={Link} href="/consultation">
            Health Plans
          </Typography>
          <Typography component={Link} href="/consultation">
            Medicine
          </Typography>
          <Typography component={Link} href="/consultation">
            Diagnostics
          </Typography>
          <Typography component={Link} href="/consultation">
            NGOS
          </Typography>
        </Stack>
     

        <AuthButton/>
      </Stack>
    </Container>
  );
};

export default Navbar;
