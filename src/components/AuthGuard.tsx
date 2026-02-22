"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useAuthModalStore from "@/stores/authModalStore";
import { useSession } from "next-auth/react";

/**
 * AuthGuard — placed in the root layout.
 * 1. Detects ?auth=required in the URL and opens the login popup.
 * 2. After 1 minute, auto-shows the login popup if the user is not logged in.
 */
const AuthGuard = () => {
    const searchParams = useSearchParams();
    const openModal = useAuthModalStore((s) => s.openModal);
    const { status } = useSession();

    // Open modal if auth=required in URL
    useEffect(() => {
        if (searchParams.get("auth") === "required") {
            openModal();
        }
    }, [searchParams, openModal]);

    // Auto-show login popup every 1 minute if not authenticated
    useEffect(() => {
        if (status === "loading") return;
        if (status === "authenticated") return;

        const interval = setInterval(() => {
            openModal();
        }, 60_000); // every 60 seconds

        return () => clearInterval(interval);
    }, [status, openModal]);

    return null; // This component renders nothing — it only triggers the modal.
};

export default AuthGuard;
