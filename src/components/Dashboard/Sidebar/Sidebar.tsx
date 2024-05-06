import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/auth.services";

const Sidebar = () => {
  const [userRole, setUserRole] = useState('');
  useEffect(() => {
    const {role}=getUserInfo() as any;
    
    setUserRole(role)
    
  }, [])
  
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
        <Image
          src={assets.svgs.logo || "https://i.ibb.co/zQWwkHf/man-shoes-01.jpg"}
          width={40}
          height={40}
          alt="logo"
        />
        <Typography sx={{ cursor: "pointer" }} variant="h6" component="h2">
          PH HealthCare
        </Typography>
      </Stack>
      <List>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
