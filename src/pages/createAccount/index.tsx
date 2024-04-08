import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import User from "../../models/user";
import "./style.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
interface Props {
  setIsAuthenticated: Function;
}

const CreateAccount = ({ setIsAuthenticated }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    lastName: yup
      .string()
      .required(t("error.required", { field: t("common.lastName") }))
      .test(
        "2len",
        t("error.minLen", { field: "2" }),
        (value: string) => value.length >= 2
      ),
    firstName: yup
      .string()
      .required(t("error.required", { field: t("common.firstName") }))
      .test(
        "2len",
        t("error.minLen", { field: "2" }),
        (value: string) => value.length >= 2
      ),
    password: yup
      .string()
      .required(t("error.required", { field: t("common.passwordPlaceholder") }))
      .test(
        "6len",
        t("error.minLen", { field: "6" }),
        (value: string) => value.length >= 6
      ),
    password2: yup
      .string()
      .required(t("error.required", { field: t("common.passwordPlaceholder") }))
      .test(
        "6len",
        t("error.minLen", { field: "6" }),
        (value: string) => value.length >= 6
      )
      .oneOf([yup.ref("password")], t("error.match")),
    address: yup
      .string()
      .required(t("error.required", { field: t("common.address") })),
    phone: yup
      .string()
      .required(t("error.required", { field: t("common.phone") }))
      .test(
        "10len",
        t("error.minLen", { field: "10" }),
        (value: string) => value.length >= 10
      ),
  });

  const formik = useFormik({
    initialValues: {
      id: undefined,
      lastName: "",
      firstName: "",
      password: "",
      password2: "",
      address: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (values.password === values.password2) {
        let user = new User();
        user.lastName = values.lastName;
        user.firstName = values.firstName;
        user.password = values.password;
        user.address = values.address;
        user.phone = values.phone;
        console.log(user);
      }
      setIsAuthenticated(true);
      navigate("/congrats");
    },
  });

  return (
    <>
      <Typography marginTop="100px" id="subtitle">
        {t("common.account")}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Card
          id="carte"
          elevation={2}
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <CardContent>
            <Box
              display="flex"
              gap="20px"
              justifyContent="space-evenly"
              margin="30px"
            >
              <Box display="flex" alignItems="center" gap="10px">
                <label>{t("common.lastName")}</label>
                <TextField
                  id="textfield"
                  placeholder={t("common.lastName")}
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="lastName"
                  value={formik.values.lastName}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <label>{t("common.firstName")}</label>
                <TextField
                  id="textfieldFirstName"
                  placeholder={t("common.firstName")}
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="firstName"
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-evenly"
              margin="30px"
              gap="15px"
            >
              <Box display="flex" alignItems="center" gap="10px">
                <label>{t("common.passwordPlaceholder")}</label>
                <TextField
                  id="textfieldPassword"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <label>{t("common.confirmation")}</label>
                <TextField
                  id="textfieldConfirm"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password2"
                  value={formik.values.password2}
                  error={
                    formik.touched.password2 && Boolean(formik.errors.password2)
                  }
                  helperText={
                    formik.touched.password2 && formik.errors.password2
                  }
                />
              </Box>
            </Box>
            <Box display="flex" gap="5px" margin="20px">
              <label>{t("common.address")}</label>
              <TextField
                id="textfieldAd"
                type="text"
                multiline
                rows={4}
                fullWidth
                sx={{ m: 1 }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="address"
                value={formik.values.address}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Box>
            <Box display="flex" alignItems="center" gap="5px" margin="20px">
              <label>{t("common.phone")}</label>
              <TextField
                id="textfieldPhone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="phone"
                value={formik.values.phone}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Box>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2em",
            }}
          >
            <Button type="submit" variant="contained" id="creer">
              {t("common.save")}
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};

export default CreateAccount;
