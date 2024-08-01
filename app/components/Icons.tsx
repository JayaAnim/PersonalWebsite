import React from 'react';
import { IconProps } from '@/types';

export const ArrowLeftIcon: React.FC<IconProps> = ({className, ...props }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className={`stroke-white ${className ? className : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    );
};

export const ArrowRightIcon: React.FC<IconProps> = ({className, ...props}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className={`stroke-white ${className ? className : ''}`}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    );
};
