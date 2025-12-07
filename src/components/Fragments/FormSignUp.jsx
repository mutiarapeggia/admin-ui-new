import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";

function FormSignUp() {
  return (
    <>
      {/* form start */}
      <div className="mt-16">
        <form action="">
          {/* Name */}
          <div className="mb-6">
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Tanzir Rahman"
              name="name"
            />
          </div>

          {/* Email Address */}
          <div className="mb-6">
            <LabeledInput
              label="Email Address"
              id="email"
              type="email"
              placeholder="hello@example.com"
              name="email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="***********"
              name="password"
            />
          </div>

          {/* Agreement */}
          <div className="mb-3">
            <CheckBox
              label=" I agree to the terms and service"
              id="terms"
              type="checkbox"
              name="terms"
            />
          </div>

          <Button type="button">Sign up</Button>
        </form>
      </div>
      {/* form end */}

      {/* teks start */}
      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute"> or sign up with</div>
      </div>
      {/* teks end */}

      {/* sign up with google start */}
      <div className="mb-8">
        <Button type="button" variant="secondary">
          <span className="flex items-center justify-center">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-0.5 0 48 48"
            >
              <path
                fill="#FBBC05"
                d="M9.83 24c0-1.52.25-2.98.7-4.36L2.62 13.6A23.76 23.76 0 000.21 24c0 3.74.87 7.26 2.41 10.39l7.9-6.05A14 14 0 019.83 24"
              />
              <path
                fill="#EB4335"
                d="M23.71 10.13c3.31 0 6.3 1.17 8.65 3.1l6.84-6.84A23.6 23.6 0 0023.71.53c-9.28 0-17.26 5.31-21.09 13.07l7.9 6.07c1.82-5.53 7.01-9.54 13.19-9.54"
              />
              <path
                fill="#34A853"
                d="M23.71 37.87c-6.17 0-11.37-4.02-13.19-9.54l-7.9 6.07C6.48 42.16 14.46 47.47 23.71 47.47c5.74 0 11.2-2.04 15.28-5.85l-7.51-5.8a13.9 13.9 0 01-7.77 2.05"
              />
              <path
                fill="#4285F4"
                d="M46.15 24c0-1.38-.21-2.87-.54-4.27H23.71v9.07h12.6a11.4 11.4 0 01-4.79 6.03l7.51 5.8A23.8 23.8 0 0046.15 24"
              />
            </svg>
            Continue with Google
          </span>
        </Button>
      </div>
      {/* sign up with google end */}

      {/* link start */}
      <div className="flex justify-center">
        <a className="text-primary text-sm font-bold">Sign in here</a>
      </div>
      {/* link end */}
    </>
  );
}

export default FormSignUp;
