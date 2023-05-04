import { Button } from "flowbite-react";
import React, { useRef } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const ref = useRef();
  return (
    <div className="containeR bg-slate-200 p-5 my-10 rounded-lg">
      <h1 className="text-5xl py-5 font-semibold text-center ">Blog pages</h1>
      <div className=" flex flex-col w-36 mx-auto justify-center">
        <Pdf targetRef={ref} filename="document.pdf">
          {({ toPdf }) => (
            <Button
              size="lg"
              gradientDuoTone="pinkToOrange"
              onClick={toPdf}
              className="button"
            >
              Generate PDF
            </Button>
          )}
        </Pdf>
      </div>
      <div ref={ref} className=" p-6">
        <div>
          <h2 className="text-3xl py-3">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p>
            The current web page context does not contain any information about
            uncontrolled and controlled components. Based on web search results,
            here is a brief explanation:
          </p>

          <p>
            Uncontrolled components are those that store their own state
            internally and use the DOM to get their current values. They are
            more like traditional HTML elements.{" "}
          </p>
          <p>
            Controlled components are those that take their current value
            through props and notify changes through callbacks like onChange. A
            parent component “controls” them by managing their own state and
            passing the new values as props to the controlled components.
          </p>
        </div>
        <div>
          <h2 className="text-3xl py-3">
            2. How to validate React props using PropTypes
          </h2>
          <p>
            PropTypes is a library that helps you check the types of the props
            passed to your components. It can help you avoid bugs and errors
            caused by passing the wrong type of props. To use PropTypes, you
            need to install it as a dependency and import it in your component
            file.
          </p>
          <p>
            you can define the type of each prop using the PropTypes validators.
            For example, if you have a component that expects a string prop
            called name and a number prop called age,
          </p>
        </div>

        <div>
          <h2 className="text-3xl py-3">
            3. Tell us the difference between nodejs and express js.
          </h2>
          <p>
            Node.js is a platform for building server-side event-driven I/O
            applications using JavaScript. It runs on the V8 JavaScript engine
            and allows you to use JavaScript outside of the browser. Node.js
            provides a core set of modules for working with files, streams,
            network protocols, etc.
          </p>
          <p>
            Express.js is a framework based on node.js for developing web
            applications using principles and methods of node.js. Express.js
            simplifies the creation and management of HTTP servers, routes,
            middleware, templates, and other features that are common in web
            development.
          </p>
        </div>
        <div>
          <h1 className="text-3xl py-3">
            {" "}
            4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p>
            A custom hook is a function that starts with the word “use” and may
            call other hooks inside it. Custom hooks allow you to reuse logic
            between components without repeating code or adding complexity to
            the component tree. Custom hooks can also help you organize your
            code and make it more readable and maintainable.
          </p>
          <p>
            You would create a custom hook when you have some common
            functionality that you want to share between different components,
            such as fetching data, subscribing to events
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
