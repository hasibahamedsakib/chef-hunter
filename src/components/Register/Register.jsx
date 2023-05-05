import { updateProfile } from "firebase/auth";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");

  const { userRegister, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    console.log("clicked");
    setError("");
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoURL = event.target.photoURL.value;

    if (password.length < 6) {
      return setError("password must be 6 character");
    }
    if (email.length < 1) {
      return setError("Please provide your email address");
    }

    userRegister(email, password)
      .then((result) => {
        console.log(result);
        const currentUser = result.user;
        if (currentUser) {
          updateProfile(currentUser, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              console.log("profile update");
            })
            .catch((error) => {
              return setError(error.message);
            });
        }

        Swal.fire(
          "Registration Successful",
          "Your account already created",
          "success"
        );
        navigate("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="grid justify-center content-center bg-no-repeat bg-cover bg-left-top h-full py-10">
      <Card className="lg:w-[450px] p-5">
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <h1 className="text-3xl font-semibold text-center text-slate-700">
            Register Now
          </h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photoURL" value="Your Photo Link" />
            </div>
            <TextInput
              id="photoURL"
              name="photoURL"
              type="text"
              placeholder="Enter your profile photo link"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              type="password"
              name="password"
              required={true}
              placeholder="Enter Your Password"
            />
          </div>
          <Label className="text-red-500 my-1">{error}</Label>
          <div className="flex items-center gap-2">
            <Checkbox
              onClick={(event) => setCheck(event.target.checked)}
              id="remember"
              type="checkbox"
              className="text-orange-500 focus:ring-orange-500"
            />

            <Label htmlFor="remember">Accept terms and condition</Label>
          </div>
          <p className="text-sm font-light text-gray-500 ">
            Already have an account yet ?
            <Link
              to="/login"
              className="font-medium text-orange-500 hover:underline ml-2"
            >
              Login
            </Link>
          </p>

          <Button
            size="lg"
            gradientDuoTone="pinkToOrange"
            className="my-3"
            type="submit"
            disabled={!check}
          >
            Register
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
