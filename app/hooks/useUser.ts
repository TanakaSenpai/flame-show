'use client'
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../configs/firebase";
import {User as FirebaseUser, signOut as FirebaseSignOut} from "firebase/auth"
import { useRouter } from "next/navigation";


export  function useSignOut() {
    const router = useRouter()
    return async () => {
        try {
            await FirebaseSignOut(auth);
            router.push("/");
        } catch (error) {
            console.error("Error signing out", error);
        }
    }
}

export function useUser() {
    const [user, setUser] = useState<FirebaseUser | null | false>(false);
    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
    }, [])

    return user;
}
