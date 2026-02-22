"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useAuthModalStore from "@/stores/authModalStore";
import { useSession } from "next-auth/react";

/**
 * AuthGuard — placed in the root layout.
 * Detects ?auth=required in the URL and opens the login popup.
 */
const AuthGuard = () => {
    const searchParams = useSearchParams();
    const openModal = useAuthModalStore((s) => s.openModal);
    const { status } = useSession();

    // Open modal if auth=required in URL, but only once session has resolved
    useEffect(() => {
        if (status === "loading") return; // Wait for session to resolve first
        if (searchParams.get("auth") === "required" && status !== "authenticated") {
            openModal();
        }
    }, [searchParams, openModal, status]);

    return null; // This component renders nothing — it only triggers the modal.
};

export default AuthGuard;
