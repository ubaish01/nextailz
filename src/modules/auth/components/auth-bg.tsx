import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AUTH_BG } from "../constant";

type Props = {
  isLogin: boolean;
};

const AuthBg = ({ isLogin }: Props) => {
  return (
    <motion.div
      key={isLogin ? "login-image" : "login-form"}
      initial={{ x: isLogin ? -100 : 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: isLogin ? 0 : -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-1/2 ${isLogin ? "order-first" : "order-last"}`}
    >
      <Image
        src={AUTH_BG}
        alt="Auth background"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default AuthBg;
