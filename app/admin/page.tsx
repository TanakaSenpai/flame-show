'use client'
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "../components/Logo";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useUser } from "../hooks/useUser";
import { Spinner } from "../components/Spinner";

const AdminLoginPage = () => {
  const user = useUser();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
if (user) return router.push("/admin/pages")
  if (user === false) return <div className="flex w-full h-screen justify-center"><Spinner className="w-10" /></div>

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      setError(false)
      try {
        await signInWithEmailAndPassword(auth, email, password)
        router.push("/admin/pages");
      } catch (err) {
        console.log(err)
        setError(true);
      }
    }
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <Card className="w-96">
          <CardHeader className="flex flex-col items-center">
            <Logo />
            <CardTitle className="flex items-center gap-1">
              Welcome Admin
              <TextGenerateEffect words="- Flame show" duration={2} />
            </CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="flex flex-col gap-5">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 items-start">
              {error && (
                <p className="text-red-500 text-sm">
                  Please check your email and password.
                </p>
              )}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default AdminLoginPage
