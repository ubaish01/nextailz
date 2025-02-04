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
      animate={{ x: isLogin ? "0%" : "100%" }}
      transition={{ type: "tween", duration: 0.5 }}
      className="absolute left-0 w-1/2 h-full"
    >
      <Image
        src={AUTH_BG}
        alt="Auth background"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-full object-cover"
        priority
      />
    </motion.div>
  );
};

export default AuthBg;
