'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import useAuthModalStore from '@/stores/authModalStore';

export default function SignupPage() {
    const router = useRouter();
    const open = useAuthModalStore((s) => s.open);

    useEffect(() => {
        open('signup', '/');
        router.replace('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}
