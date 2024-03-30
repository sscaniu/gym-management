"use client";

import Footer from "../components/shared/footer";
import LoginForm from "../components/shared/loginForm";

export default function Login() {
  return (
    <article className="flex-1 z-10 bg-delft-blue">

      <div className="mx-[56px] my-10">
        <LoginForm />
      </div>
    </article>
  );
}
