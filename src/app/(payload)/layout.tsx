import React from 'react'

// Minimal layout to isolate Payload admin from the main app layout
// (prevents your Navbar/Footer from rendering inside the admin panel)
export default function PayloadLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
