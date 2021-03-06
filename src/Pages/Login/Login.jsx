import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
// import { ToastContainer, toast } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../Shared/PageTitle/PageTitle";
import useToken from "../../hook/useToken";
// import { Helmet } from "react-helmet-async";

const Login = () => {
  // email and password input event
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  // sign in with Email nad Password auth
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  // forget password auth
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);

  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const navigateRegister = () => {
    navigate("/register");
  };
  // handle Login Form Submit
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };

  // handle Forget password
  const handleForgetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send Email");
    } else {
      toast("Please Enter your email address");
    }
  };

  return (
    <div className="container w-50 mx-auto">
      {/* <Helmet>
        <title>Login- Genius-Car-Services</title>
      </Helmet> */}
      <PageTitle title="Login"></PageTitle>
      <h2 className="text-center text-info mt-4">Please Login</h2>
      <Form className="border border-5 p-5" onSubmit={handleLoginSubmit}>
        {/* error message */}
        <p className="text-danger">
          {error ? "Error !!! Some think is wrong" : " "}
        </p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>
          <span
            className="text-info text-decoration-underline user-select-none"
            onClick={handleForgetPassword}
          >
            Forget Password
          </span>
        </p>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>
        New to Genius Car?{" "}
        <span
          className="text-info text-decoration-underline user-select-none"
          onClick={navigateRegister}
        >
          Please Register
        </span>
      </p>
      {/* <ToastContainer /> */}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
