import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import AuthBg from "./components/auth-bg";
import AuthForm from "./components/auth.form";

const AuthModule = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background/50 p-4">
      <Card className="w-full max-w-5xl h-[600px] relative overflow-hidden">
        <div className="flex w-full h-full relative">
          <AuthBg isLogin={isLogin} />
          <AuthForm
            isLogin={isLogin}
            toggleLogin={() => setIsLogin(!isLogin)}
          />
        </div>
      </Card>
    </div>
  );
};

export default AuthModule;
