import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="grid justify-center content-center bg-no-repeat bg-cover bg-left-top h-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${"https://media.gettyimages.com/id/653331096/photo/chinese-cuisine.webp?s=2048x2048&w=gi&k=20&c=2DLxojNEsNDoYcU-f3XyPjsBPdjMVCm-6o1JizBCeFo="})`,
      }}
    >
      <Card className="lg:w-[450px]">
        <form className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-center text-slate-700">
            Login Now
          </h1>
          <div>
            <div className="my-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
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
            <TextInput id="password1" type="password" required={true} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <p className="text-sm font-light text-gray-500 ">
            Don’t have an account yet ?
            <Link
              to="/register"
              className="font-medium text-orange-400 hover:underline ml-2"
            >
              Sign up
            </Link>
          </p>
          <Button className="my-3" type="submit" color="warning">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
