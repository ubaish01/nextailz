import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GOOGLE_ICON } from "../constant";

type AuthProps = {
  isLogin: boolean;
  toggleLogin: () => void;
};

const AuthForm = ({ isLogin, toggleLogin }: AuthProps) => {
  return (
    <motion.div
      key={isLogin ? "form-login" : "form-signup"}
      initial={{ x: isLogin ? 100 : 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: isLogin ? 0 : 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-1/2 p-8 flex flex-col justify-center"
    >
      <div className="space-y-6 w-full max-w-sm mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {isLogin ? "Sign in to continue" : "Join our community"}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input type="text" placeholder="Full Name" className="pl-10" />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input type="email" placeholder="Email" className="pl-10" />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input type="password" placeholder="Password" className="pl-10" />
          </div>

          <Button className="w-full">
            {isLogin ? "Sign In" : "Create Account"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className=" gap-4">
            <Button variant="outline" className="w-full h-10">
              <Image
                width={100}
                height={100}
                alt="google-icon"
                className="size-6"
                src={GOOGLE_ICON}
              />
              Login with Google
            </Button>
          </div>

          <div className="text-center">
            <button
              onClick={toggleLogin}
              type="button"
              className="text-sm text-muted-foreground "
            >
              {isLogin ? (
                <div>
                  Don&apos;t have an account?{" "}
                  <span className="text-primary font-bold">Sign up</span>
                </div>
              ) : (
                <div>
                  Already have an account?{" "}
                  <span className="text-primary font-bold">Sign in</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AuthForm;
