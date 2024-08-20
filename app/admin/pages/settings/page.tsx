"use client";
import React, { FormEvent, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { auth } from "@/app/configs/firebase";
import { updatePassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const AdminAccountSettings = () => {
  const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const user = auth.currentUser

        if (newPass === confirmPass) {
            try {
              await updatePassword(user!, newPass);
              setNewPass("");
              setConfirmPass("");
              toast.success("Your password has been updated successfully.")
            } catch (error: FirebaseError | any) {
              toast.error(error.message)
            }
        } else {
          return toast.error("Your passwords do not match.")
      }
      
    };
    
  return (
    <div className="w-full h-[70vh] flex justify-center items-center">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center text-xl">
            Account Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <Label>New Password</Label>
              <Input
                type="password"
                placeholder="Enter new password (at least 6 characters)"
                minLength={6}
                required
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="Retype your password"
                required
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
          <CardFooter>
            <Button type="submit" className="w-full">Save</Button>
          </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminAccountSettings;
