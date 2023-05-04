import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="max-w-2xl py-10 mx-auto">
        <Card>
          <form className="flex flex-col gap-4">
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

            <Button type="submit">Submit your Comment</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
