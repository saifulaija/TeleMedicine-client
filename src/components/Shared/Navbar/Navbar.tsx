"use client";

import useUserInfo from "@/hooks/useUserInfo";
import logoutUser from "@/services/actions/logoutUser";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const userInfo = useUserInfo();
  const router = useRouter();
  const handleLogout = () => {
    logoutUser(router);
  };

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
          {userInfo?.userId && (
            <Typography component={Link} href="/dashboard">
              Dashboard
            </Typography>
          )}
        </Stack>

        {userInfo?.userId ? (
          <Button color="warning" onClick={() => handleLogout()}>
            Logout
          </Button>
        ) : (
          <Button component={Link} href="/login">
            Login
          </Button>
        )}
      </Stack>
    </Container>
  );
};

export default Navbar;
