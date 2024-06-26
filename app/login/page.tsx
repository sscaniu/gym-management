"use client";
import Link from "next/link";
import { useFormState } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import Button from "../components/shared/Button";
import TextField from "../components/shared/TextField";

const Login = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="flex-1 bg-vectorcurve bg-no-repeat px-14 py-8">
      <div className="w-full h-full grid gap-5 justify-items-center">
        <div className="font-rubik font-bold text-[40px] leading-8">
          Welcome to Gymbuddies
        </div>

        <div className="w-full max-w-[556px] flex flex-col items-center bg-[#00000040] backdrop-blur-xl shadow-sm rounded-sm pt-7 px-6 pb-[52px]">
          <Button color="dark" size="lg" fullWidth className="mb-9">
            Quick Sign In With Google
          </Button>

          <span className="font-jost font-semibold text-base mb-7">Or</span>

          <form
            action={dispatch}
            className="w-full flex flex-col items-center mb-8"
          >
            <div className="w-full grid gap-10 mb-6">
              <TextField
                size="lg"
                label="Email"
                type="email"
                id="email"
                name="email"
                required
                fullWidth
                startAdornment="@"
              />
              <TextField
                size="lg"
                label="Password"
                type="password"
                id="password"
                name="password"
                required
                fullWidth
              />
            </div>
            <Link
              href="/"
              className="font-jost text-base underline mb-8 self-start"
            >
              Forgot your password
            </Link>

            <Button
              type="submit"
              size="sm"
              color="warning"
              variant="outlined"
              className="w-[172px]"
            >
              Sign in
            </Button>

            <div
              className="flex items-end space-x-1"
              aria-live="polite"
              aria-atomic="true"
            >
              {errorMessage && (
                <>
                  <p className="text-sm text-red-500">{errorMessage}</p>
                </>
              )}
            </div>
          </form>

          <p className="font-jost text-base mb-2">Don’t have an account yet?</p>

          <Button color="dark" size="lg" fullWidth href="/register">
            Create an account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
