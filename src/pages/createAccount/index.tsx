import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import User from "../../models/security/User";
import "./style.css";
import { useNavigate } from "react-router-dom";
import CreationService from "../../services/CreationService";
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
    username: yup
      .string()
      .required(t("error.required", { field: t("common.username") }))
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
      username: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const newUser: User = {
          lastname: values.lastName,
          firstname: values.firstName,
          password: values.password,
          address: values.address,
          username: values.username,
        };

        console.log(newUser);

        const response = await CreationService.create(newUser);
        if (response) {
          setIsAuthenticated(true);

          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("expiration", response.expiration);
          localStorage.setItem("refreshToken", response.refreshToken);
          localStorage.setItem("user", JSON.stringify(response.user));

          navigate("/congrats");
        } else {
          console.error("");
        }
      } catch (error) {
        console.error("Error");
      }
    },
  });

  return (
    <>
      <Typography marginTop="100px" id="subtitle" variant="h2">
        {t("common.account")}
      </Typography>

      <Card
        id="carte"
        elevation={2}
        sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <form onSubmit={formik.handleSubmit}>
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
                  aria-label={t("common.passwordPlaceholder")}
                  placeholder={t("common.passwordPlaceholder")}
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
                  aria-label={t("common.confirmation")}
                  placeholder={t("common.confirmation")}
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
                aria-label={t("common.address")}
                placeholder={t("common.address")}
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
                aria-label={t("common.phone")}
                placeholder={t("common.phone")}
                id="textfieldPhone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="username"
                value={formik.values.username}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
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
        </form>
      </Card>
    </>
  );
};

export default CreateAccount;
