"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import Link from "next/link";
import Button from "../components/shared/Button";
import TextField from "../components/shared/TextField";
import { register } from "../lib/actions";

const Register = () => {
  const router = useRouter();
  const [errorMessage, dispatch] = useFormState(register, undefined);

  useEffect(() => {
    if (errorMessage === "success") {
      router.push("/success");
    }
  }, [errorMessage]);

  return (
    <div className="flex-1">
      {errorMessage === "error" && (
        <div className="w-full min-h-[56px] bg-danger/50 font-jost font-semibold text-base text-center py-4">
          This email is alredy registered with an existing account. Please click
          here to{" "}
          <Link href="/login" className="underline">
            sign in.
          </Link>
        </div>
      )}
      <div className="bg-vectorcurve bg-no-repeat px-14 py-2.5">
        <div className="w-full h-full grid gap-5 justify-items-center">
          <div className="font-rubik font-bold text-[40px] leading-8">
            Create Your Account
          </div>

          <div className="w-full max-w-[556px] flex flex-col items-center bg-[#00000040] backdrop-blur-xl shadow-sm rounded-sm pt-3 px-6 pb-5">
            <form
              action={dispatch}
              className="w-full flex flex-col items-center mb-5"
            >
              <div className="w-full grid gap-6 mb-9">
                <div className="grid grid-cols-2 gap-3">
                  <TextField
                    label="First name"
                    id="first_name"
                    name="first_name"
                    required
                    fullWidth
                  />
                  <TextField
                    label="Last name"
                    id="last_name"
                    name="last_name"
                    required
                    fullWidth
                  />
                </div>
                <TextField
                  label="Phone number"
                  id="phone_number"
                  name="phone_number"
                  required
                  fullWidth
                />
                <TextField
                  label="EMAIL"
                  type="email"
                  id="email"
                  name="email"
                  required
                  fullWidth
                  error={errorMessage === 'error'}
                />
                <TextField
                  label="Verify email"
                  type="email"
                  id="verify_email"
                  name="verify_email"
                  required
                  fullWidth
                  error={errorMessage === 'error'}
                />
                <TextField
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  required
                  fullWidth
                />
              </div>

              <Button
                type="submit"
                size="sm"
                color="warning"
                variant="outlined"
                className="w-[172px]"
              >
                Create
              </Button>
            </form>

            <p className="font-jost text-base leading-10 mb-2">
              Already have an account?
            </p>

            <Button
              color="dark"
              size="lg"
              fullWidth
              href="/login"
              className="mb-7"
            >
              Sign Into Existing Account
            </Button>
            <p className="font-jost text-base leading-10">
              Click here for{" "}
              <Link href="/" className="underline">
                support
              </Link>{" "}
              and{" "}
              <Link href="/" className="underline">
                FAQ’s
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
