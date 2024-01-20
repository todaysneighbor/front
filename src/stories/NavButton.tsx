import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface ButtonProps {
    color?: string;
    size: 'small';
    link: string;
    label: string;
}

export const NavButton = ({
    size = 'small',
    color = '#666666',
    link,
    label,
}: ButtonProps) => {
    const router = useRouter();
    return (
        <div 
            style={{ paddingRight: '15px' }}
            onClick={() => {
                router.push(`${link}`, { scroll: false })
            }}
        >
            {label}
        </div>
    )
}