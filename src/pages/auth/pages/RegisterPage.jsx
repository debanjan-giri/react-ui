import { useFormik } from "formik";
import React, { useRef } from "react";
import { Button, Card, CardBody, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { register } from "../../../store/redux/authSlice";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      try {
        const result = dispatch(register(values.username));

        if (
          typeof result?.payload == "string" &&
          result?.payload.trim().length > 0
        ) {
          navigate("/home");
        } else {
          ref.current.focus();
        }
      } catch (error) {
        console.error("Error in registration:", error);
      } finally {
        setSubmitting(false);
      }
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters"),
    }),
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="shadow-sm py-4 px-2">
        <Card.Body>
          <Form onSubmit={handleSubmit} className="d-flex flex-column gap-2">
            <Form.Group>
              <Form.Label>User</Form.Label>
              <Form.Control
                ref={ref}
                type="text"
                name="username"
                onChange={handleChange}
                value={values.username}
                isInvalid={!!errors.username}
                placeholder="Enter your username"
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterPage;
