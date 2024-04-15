import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";

interface Props {
  setIsAuthenticated: Function;
}

const Login = ({ setIsAuthenticated }: Props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [error, setError] = useState<string>("");

  const schema = yup.object().shape({
    login: yup
      .string()
      .required(t("common.required", { field: t("common.loginPlaceholder") }))
      .test(
        "10Len",
        t("common.car", { field: "10" }),
        (value: string) => value.length >= 10
      ),
    password: yup
      .string()
      .required(
        t("common.required", { field: t("common.passwordPlaceholder") })
      )
      .test(
        "6Len",
        t("common.car", { field: "6" }),
        (value: string) => value.length >= 6
      ),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      /**if (values.login === "1111111111" && values.password === "tototo") {
        setError(false);
        setIsAuthenticated(true);
        navigate("/menu");
      } else {
        setError(true);
      }**/
      AuthenticationService.login(values.login, values.password)
        .then((response) => {
          setIsAuthenticated(response);
          setError(response ? "" : t("common.loginError"));
          navigate("/menu");
        })
        .catch((reason) => {
          console.error(reason);
          setError(t("common.technicalError"));
        });
    },
  });

  return (
    <Card className="login" elevation={10}>
      {error && <Typography color="red">{t("common.loginError")}</Typography>}
      <form onSubmit={formik.handleSubmit}>
        <InputLabel className="text">{t("common.loginPlaceholder")}</InputLabel>
        <TextField
          id="back2"
          placeholder={t("common.loginPlaceholder")}
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
          name="login"
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
        />
        <InputLabel className="text">
          {t("common.passwordPlaceholder")}
        </InputLabel>
        <TextField
          id="back"
          placeholder={t("common.passwordPlaceholder")}
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          name="password"
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Box id="box">
          <Link to="/create" color={"#fbc02c"} id="link">
            {t("common.create")}
          </Link>
          <Button variant="contained" type="submit" className="button">
            {t("common.connect")}
          </Button>
        </Box>
      </form>
    </Card>
  );
};

export default Login;
