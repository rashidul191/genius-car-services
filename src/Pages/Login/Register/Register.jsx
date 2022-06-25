import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import useToken from "../../../hook/useToken";

const Register = () => {
  // Agree Trams and Condition
  const [agree, setAgree] = useState(false);
  // create user account Email and Password
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // update user profile
  const [updateProfile] = useUpdateProfile(auth);
  const [token] = useToken(user);

  const navigate = useNavigate();
  if (token) {
    // console.log(user);
    navigate("/");
  }

  // handle Register form submit
  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(name, email, password);
    // if (agree) {
    //   createUserWithEmailAndPassword(email, password);
    // }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("Updated profile");
    // navigate("/");
  };

  // toggle login btn
  const navigateLogin = () => {
    navigate("/login");
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center text-info mt-4">Please Register</h2>

      <Form className="border border-5 p-5" onSubmit={handleRegisterSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group
          className={`mb-3 ${agree ? "text-success" : "text-danger"}`}
          controlId="formBasicCheckbox"
        >
          <Form.Check
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            label="Accept Trams & Conditions"
          />
        </Form.Group>

        <Button disabled={!agree} variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p>
        Already have an account?{" "}
        <span
          className="text-info text-decoration-underline user-select-none"
          onClick={navigateLogin}
        >
          Please Login
        </span>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
