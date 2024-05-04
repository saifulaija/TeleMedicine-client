"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogin } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const patientValidationSchema=z.object({
  name:z.string().min(1,'Please enter your name'),
  email:z.string().email('Please enter your valid email address'),
  contactNumber:z.string().regex(/^\d{11}$/,'Please provide a valid phone number'),
  address:z.string().min(1,'Please enter your address'),
})

const validationSchema=z.object({
  password:z.string().min(6,'Must be at least 6 characters'),
  patient:patientValidationSchema
})

export const defaultValues = {
  password: '', 
  patient: {
    name: '', 
    email: '', 
    contactNumber: '', 
    address: '', 
  },
};


const RegisterPage = () => {
  const router = useRouter();

  const handleRegister = async (values:FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await registerPatient(data);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password: values.password,
          email: values.patient.email,
        });
        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/");
        }
      }
    } catch (err: any) {
      console.log(err.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{ justifyContent: "center", alignItems: "center", height: "80vh" }}
        spacing={8}
        gap={2}
      >
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{ justifyContent: "center", alignItems: "center" }}
            spacing={2}
          >
            <Box>
              <Image src={assets.svgs.logo} alt="logo" width={70} height={70} />
            </Box>
            <Typography variant="h5" fontWeight={600}>
              Patient Register
            </Typography>
          </Stack>
          <PHForm onSubmit={handleRegister} resolver={zodResolver(validationSchema)} defaultValues={defaultValues}>
            <Grid container spacing={2} my={1}>
              <Grid item md={12}>
                <PHInput
                 label="Name"
                 fullWidth={true}
                 name="patient.name"
                
                />
              </Grid>
              <Grid item md={6}>
                <PHInput
                  label="Email"
                  type="email"
                  fullWidth={true}
                 
                  name="patient.email"
                />
              </Grid>
              <Grid item md={6}>
                <PHInput
                  label="Password"
                  type="password"
                 
                  fullWidth={true}
                  name="password"
                />
              </Grid>
              <Grid item md={6}>
                <PHInput
                  label="ContactNumber"
                  type="tel"
                  fullWidth={true}
                 
                  name="patient.contactNumber"
                />
              </Grid>
              <Grid item md={6}>
                <PHInput
                  label="Address"
                  type="text"
                  fullWidth={true}
                
                  name="patient.address"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth sx={{ my: 2 }}>
              Register
            </Button>
            <Typography component="p" fontWeight={300}>
              Do you have an account? <Link href="/login">Login</Link>
            </Typography>
          </PHForm>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
