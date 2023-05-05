import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
const Contact = () => {
  const { users } = useContext(AuthContext);
  const navigate = useNavigate();
  const submitMessage = (e) => {
    e.preventDefault();
    Swal.fire(
      `Hello ${users?.displayName}`,
      `Your Message Already Send to Author`,
      "success"
    );
    navigate("/");
  };
  return (
    <div>
      <div className="max-w-2xl py-10 mx-auto">
        <Card>
          <form className="flex flex-col gap-4" onSubmit={submitMessage}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="Enter Your email"
                required={true}
              />
            </div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Your message" />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                required={true}
                rows={4}
              />
            </div>

            <Button gradientDuoTone="greenToBlue" type="submit">
              Submit your Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
