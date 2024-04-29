import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center" py={2}>
        <Typography variant="h5" component={Link} href="/" fontWeight={600}>
          TLEME<Box component="span" color="primary.main">MEDICINE</Box>
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
        <Button component={Link} href="/login">
          Login
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;
