import React from "react";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  // const location = useLocation()
  const navigate = useNavigate();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, userGit, loadingGit, errorGit] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, userFb, loadingFb, errorFb] =
    useSignInWithFacebook(auth);

  //   let from = location.state?.from?.pathname || "/";
  if (user || userGit || userFb) {
    // console.log(user);
    // Navigate(from, { replace: true });
    navigate("/");
  }

  let errorElement;
  if (error || errorGit || errorFb) {
    errorElement = (
      <p className="text-danger">
        {error?.message} {errorGit?.message} {errorFb?.message}
      </p>
    );
  }

  return (
    <div className="App">
      <div className=" d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-primary w-25"></div>
        <p className=" mt-2 px-3">or</p>
        <div style={{ height: "2px" }} className="bg-primary w-25"></div>
      </div>
      {/* error  message*/}
      {errorElement}

      {/* Social sing in btn  */}
      <div>
        <button
          className="btn btn-info w-50 my-2"
          onClick={() => signInWithGoogle()}
        >
          Google Sing In
        </button>
      </div>
      <div>
        <button
          className="btn btn-success w-50 my-2"
          onClick={() => signInWithGithub()}
        >
          GitHub Sign In
        </button>
      </div>
      <div>
        <button
          className="btn btn-warning w-50 my-2"
          onClick={() => signInWithFacebook()}
        >
          Facebook Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
