import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { userLogin, githubLogin, googleLogin, users } =
    useContext(AuthContext);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    setError("");

    userLogin(email, password)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        alert("Login Success");
        navigate(from || "/");
      })
      .catch((error) => {
        return setError(error.message);
      });
  };
  return (
    <div
      className="grid justify-center content-center bg-no-repeat bg-cover bg-left-top h-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${"https://media.gettyimages.com/id/653331096/photo/chinese-cuisine.webp?s=2048x2048&w=gi&k=20&c=2DLxojNEsNDoYcU-f3XyPjsBPdjMVCm-6o1JizBCeFo="})`,
      }}
    >
      <Card className="lg:w-[450px] p-4">
        <form className="flex flex-col gap-4 " onSubmit={handleLogin}>
          <h1 className="text-3xl font-semibold text-center text-slate-700">
            Login Now
          </h1>
          <div>
            <div className="my-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              name="email"
              className="rounded-full"
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              name="password"
              id="password1"
              type="password"
              required={true}
            />
          </div>
          <Label className="text-red-500 my-1">{error}</Label>
          <div className="flex items-center gap-2">
            <Checkbox
              onClick={(event) => setCheck(event.target.checked)}
              id="remember"
              className="text-orange-500 focus:ring-orange-500"
            />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <p className="text-sm font-light text-gray-500 ">
            Don’t have an account yet ?
            <Link
              to="/register"
              className="font-medium text-orange-500 hover:underline ml-2"
            >
              Sign up
            </Link>
          </p>
          <Button
            disabled={!check}
            className="my-3 bg-orange-500 hover:bg-orange-700"
            type="submit"
          >
            Login
          </Button>
        </form>

        <button
          onClick={() => googleLogin()}
          className="w-full h-10 border-none focus:outline-none bg-teal-400 text-white text-xl rounded-md flex gap-x-3 justify-center items-center  focus:ring-2 ring-orange-500"
        >
          <FaGoogle />
          Login With Google
        </button>
        <button
          onClick={() => githubLogin()}
          className="w-full h-10 border-none focus:outline-none bg-slate-500 text-white text-xl rounded-md flex gap-x-3 justify-center items-center focus:ring-2 ring-orange-500"
        >
          <FaGithub />
          Login With Github
        </button>
      </Card>
    </div>
  );
};

export default Login;
