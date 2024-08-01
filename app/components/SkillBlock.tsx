'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SkillProps, Position, SkillBlockProps } from '@/types';

const SkillBlock: React.FC<SkillBlockProps> = ({ name, alt, logo, link, mousePosition }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [logoHovered, setLogoHovered] = useState(false);
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const ref = useRef<HTMLDivElement | null>(null);
    const logoRef = useRef<HTMLAnchorElement | null>(null);



    useEffect(() => {

        const updatePosition = () => {
            if (ref.current && isVisible) {
                const rect = ref.current.getBoundingClientRect();
                setPosition({ x: rect.left, y: rect.top });
            }
        }

        const currentRef = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (currentRef) {
            observer.observe(currentRef);
            updatePosition();
        }

        window.addEventListener('scroll', updatePosition);
        window.addEventListener('resize', updatePosition);

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('resize', updatePosition);
        };

    }, [isVisible]);

    useEffect(() => {
        const currentRef = ref.current;

            // If box reference, box is visible, and mouse inside box bounds
            if (currentRef && isVisible && mousePosition.y > position.y && mousePosition.y < (position.y + currentRef.clientHeight) && mousePosition.x > position.x && mousePosition.x < (position.x + currentRef.clientWidth)) {

                setIsHovered(true);

                const currentLogoRef = logoRef.current;

                // If logo reference, and mouse inside logo bounds
                if (currentLogoRef && mousePosition.y > (position.y + currentLogoRef.offsetTop) && mousePosition.y < (position.y + currentLogoRef.clientHeight + currentLogoRef.offsetTop) && mousePosition.x > (position.x + currentLogoRef.offsetLeft) && mousePosition.x < (position.x + currentLogoRef.clientWidth + currentLogoRef.offsetLeft)) {
                    setLogoHovered(true);
                }
                else {
                    setLogoHovered(false);
                }

            }
            else {
                setIsHovered(false);
            }
    }, [position, mousePosition, isVisible]);



    return (
        <div
            className={`relative rounded-tr-lg rounded-bl-lg ${isHovered ? 'skillblock-circular-gradient' : ''}`}
            style={{ width: '250px', height: '200px', }}
        >
            <div className="absolute top-0 left-0 w-[3px] h-5 bg-neon-green -translate-x-px -translate-y-1/2"></div>
            <div className={`absolute top-0 left-0 w-5 h-[3px] bg-neon-green -translate-y-px -translate-x-1/2 transition-transform duration-[1000ms] ease-in ${isVisible ? '' : '-rotate-45'}`}></div>
            <div className="absolute bottom-0 right-0 w-[3px] h-5 bg-neon-green translate-x-px translate-y-1/2"></div>
            <div className={`absolute bottom-0 right-0 w-5 h-[3px] bg-neon-green translate-y-px translate-x-1/2 transition-transform duration-[1000ms] ease-in ${isVisible ? '' : 'rotate-45'}`}></div>
            <div className="relative w-full h-full overflow-hidden">
                <div
                    ref={ref}
                    className="w-full h-full border border-gray-300 rounded-tr-lg rounded-bl-lg flex flex-col items-center justify-center"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 1s ease-in-out',
                        mixBlendMode: 'difference'
                    }}
                >
                    <Link
                        href={link}
                        ref={logoRef}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[40%] relative"
                    >
                        <div className="w-full relative aspect-square">
                            <Image
                                src={logo}
                                fill
                                style={{ objectFit: 'contain' }}
                                alt={alt}
                            />
                        </div>
                        <p className="mt-2 text-center cursor-pointer">
                            {name}
                        </p>
                    </Link>
                </div>
                {isHovered && (
                    <div
                        className="absolute pointer-events-none bg-white rounded-full transition duration-300"
                        style={{

                            left: logoHovered ? `${mousePosition.x - position.x - 50}px` : `${mousePosition.x - position.x - 20}px`,
                            top: logoHovered ? `${mousePosition.y - position.y - 50}px` : `${mousePosition.y - position.y - 20}px`,
                            width: logoHovered ? '100px' : '40px',
                            height: logoHovered ? '100px' : '40px',

                            mixBlendMode: 'difference',
                            transition: 'width 0.15s, height 0.15s'
                        }}
                    />
                )}
            </div>
        </div>
    );
};

const skills: SkillProps[] = [
    { name: "AWS", alt: "AWS Logo", logo: "/aws_logo.svg", link: "https://aws.amazon.com/" },
    { name: "SASS/CSS", alt: "CSS Logo", logo: "/css_logo.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", alt: "JavaScript Logo", logo: "/javascript_logo.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "MySQL", alt: "MySQL Logo", logo: "/mysql_logo.svg", link: "https://www.mysql.com/" },
    { name: "PostgreSQL", alt: "PostgreSQL Logo", logo: "/postgresql_logo.svg", link: "https://www.postgresql.org/" },
    { name: "Tailwind", alt: "Tailwind Logo", logo: "/tailwind_logo.svg", link: "https://tailwindcss.com/" },
    { name: "Azure", alt: "Azure Logo", logo: "/azure_logo.svg", link: "https://azure.microsoft.com/" },
    { name: "Django", alt: "Django Logo", logo: "/django_logo.svg", link: "https://www.djangoproject.com/" },
    { name: "Kubernetes", alt: "Kubernetes Logo", logo: "/kubernetes_logo.svg", link: "https://kubernetes.io/" },
    { name: "Next.js", alt: "Next.js Logo", logo: "/nextjs_logo.svg", link: "https://nextjs.org/" },
    { name: "Python", alt: "Python Logo", logo: "/python_logo.svg", link: "https://www.python.org/" },
    { name: "C/C++", alt: "C++ Logo", logo: "/cplusplus_logo.svg", link: "https://isocpp.org/" },
    { name: "Docker", alt: "Docker Logo", logo: "/docker_logo.svg", link: "https://www.docker.com/" },
    { name: "Java", alt: "Java Logo", logo: "/java_logo.svg", link: "https://www.java.com/" },
    { name: "Node.js/Express.js", alt: "Node.js Logo", logo: "/nodejs_logo.svg", link: "https://nodejs.org/" },
    { name: "React", alt: "React Logo", logo: "/react_logo.svg", link: "https://reactjs.org/" },
];

const SkillBlockWrapper: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };

    }, []);

    return (
        <>
            {skills.map((skill, index) => (
                <SkillBlock key={index} {...skill} mousePosition={mousePosition}/>
            ))}
        </>

    );
}

export default SkillBlockWrapper;

