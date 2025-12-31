'use client';

export default function scrollIntoView(ref) {
    if (!ref?.current) return;

    ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}
