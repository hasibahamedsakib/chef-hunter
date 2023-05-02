import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";

const Register = () => {
  return (
    <div className="max-w-sm mx-auto my-10">
      <Card>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
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
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
