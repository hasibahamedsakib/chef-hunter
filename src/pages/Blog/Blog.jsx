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
      <div ref={ref} className=" p-6 bg-slate-200 ">
        <div>
          <h2 className="text-3xl py-3">
            1. Tell us the differences between uncontrolled and controlled
            components.
          </h2>

          <p className="text-slate-600 py-2">
            Uncontrolled and controlled components are terms used to describe
            React components that render HTML form elements, such as input,
            select, textarea, etc. The difference between them is how they
            handle the value of the form elements.
          </p>
          <p className="text-slate-600 py-2">
            Uncontrolled components let the DOM handle the value of the form
            elements by itself. You can access the value of an uncontrolled
            component using a ref. This is similar to traditional
          </p>
          <p className="text-slate-600 py-2">
            Controlled components use the state of the component to handle the
            value of the form elements. You can pass the value as a prop and
            update it using an onChange handler. This gives you more control
            over the form data.
          </p>
        </div>
        <div>
          <h2 className="text-3xl py-3">
            2. How to validate React props using PropTypes
          </h2>
          <p className="text-slate-600 py-2">
            To validate React props using PropTypes, you can follow these steps:
            <ul className="space-y-3 list-disc list-inside">
              <li>
                Install the prop-types library using npm or yarn. This library
                provides a range of validators for configuring type definitions
                for props.
                <li>npm install prop-types # or yarn add prop-types</li>
              </li>
              <li>
                Import PropTypes from the prop-types library in your component
                file.
                <li>import PropTypes from 'prop-types';</li>
              </li>
              <li>
                Define the propTypes object for your component using the
                PropTypes validators. You can specify the type, shape, and
                requirement of each prop using the available validators.
              </li>
              <li>
                Optionally, you can also define the defaultProps object for your
                component to provide default values for props that are not
                required.
              </li>
              <li>
                If a prop does not match the specified type or is missing a
                required prop, React will show a warning message in the console
                during development mode. This can help you catch and fix errors
                in your props.
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h2 className="text-3xl py-3">
            3. Tell us the difference between nodejs and express js.
          </h2>
          <p className="text-slate-600 py-2">
            Node.js and Express.js are related but different technologies for
            building web applications using JavaScript.
          </p>
          <ul className="space-x-3 list-disc list-inside">
            <li>
              Node.js is a run-time environment that allows you to execute
              JavaScript code outside of a browser. It provides a built-in HTTP
              module that can create a web server and handle requests and
              responses. Node.js is based on the Google V8 engine that can run
              JavaScript code fast and efficiently. Node.js is used for building
              server-side, event-driven, input-output applications that can
              handle concurrent connections without blocking.
            </li>
            <li>
              Express.js is a framework that sits on top of Node.js and
              simplifies its APIs and adds new features. It makes it easier to
              organize your application’s functionality with middleware and
              routing. It adds helpful utilities to Node.js’s HTTP objects, such
              as sending JSON data, setting headers, etc. It also facilitates
              the rendering of dynamic HTML pages using various templating
              engines, such as EJS, Pug, Handlebars, etc.
            </li>
          </ul>
          <p className="text-slate-600 py-2">
            In summary, Node.js is a platform that provides the core
            functionality for building web applications, while Express.js is a
            framework that enhances Node.js with additional features and
            abstractions.
          </p>
        </div>
        <div>
          <h1 className="text-3xl py-3">
            4. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className="text-slate-600 py-2">
            A custom hook is a function that starts with the word “use” and can
            call other hooks inside it. Custom hooks allow you to reuse stateful
            logic between different components without repeating code or
            creating complex dependencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
