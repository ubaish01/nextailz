import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import AuthBg from "./components/auth-bg";
import AuthForm from "./components/auth.form";

const AuthModule = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background/50 p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl h-[600px] relative"
      >
        <Card className="w-full h-full overflow-hidden flex">
          <AnimatePresence mode="wait">
            <AuthBg key={0} isLogin={isLogin} />
            <AuthForm
              key={1}
              isLogin={isLogin}
              toggleLogin={() => setIsLogin((prev) => !prev)}
            />
          </AnimatePresence>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthModule;
