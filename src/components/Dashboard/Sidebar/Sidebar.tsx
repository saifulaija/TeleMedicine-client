import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

const Sidebar = () => {
  const drawer = (
    <div>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <Box>
      <Stack
        sx={{ py: 1, mt: 1 }}
        component={Link}
        href="/"
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Image src={assets.svgs.logo || "https://i.ibb.co/zQWwkHf/man-shoes-01.jpg"} width={40} height={40} alt="logo" />
        <Typography sx={{cursor:'pointer'}} variant="h6" component="h2">
          PH HealthCare
        </Typography>
      </Stack>
      {drawer}
    </Box>
  );
};

export default Sidebar;
