import React from 'react';
import ExperienceScrollLine from './ExperienceScrollLine';

import { ExperienceItemProps } from '@/types';

const ExperienceSection: React.FC = () => {
    return (
        <section id="experience" className="relative z-10 min-h-screen w-screen bg-dark-black p-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-electric-blue">Experience</h2>
            <div className="flex w-full">
                <div className="flex-grow min-w-[25px] relative">
                    <ExperienceScrollLine/>

                </div>
                <div className="max-w-3xl w-full space-y-8">
                    <ExperienceItem 
                        title="Web Developer II (Fullstack Developer)"
                        company="UWF Center for Cybersecurity"
                        date="April 2024 – Present"
                        responsibilities={[
                            "Created new portal for 3000+ students to connect with large employers including J.P Morgan and Capital One",
                            "Led migration of Django and Javascript based application to .NET core improving maintainability and performance"
                        ]}
                    />
                    <ExperienceItem 
                        title="Technical Support (Fullstack Developer)"
                        company="UWF Center for Cybersecurity"
                        date="March 2023 – April 2024"
                        responsibilities={[
                            "Collaborated closely with stakeholders to gather requirements and enhance Django and JavaScript based platform serving over 3000 users improving functionality and user experience",
                            "Led critical transition of contracted web application, managing code migration, legal compliance, and infrastructure setup; assumed full ownership of site operations and development",
                            "Implemented caching with Redis and optimized PostgreSQL database, while utilizing Docker and Dokku for deployment, resulting in 30 percent faster response times and significantly reduced downtime",
                            "Collaborated with IT team and external partners to integrate four major user services, with external APIs"
                        ]}
                    />
                    <ExperienceItem 
                        title="Research Assistant"
                        company="University of West Florida"
                        date="September 2023 – March 2024"
                        responsibilities={[
                            "Developed threat collection platform in a 6-member team, enhancing access to and correlation of new cyber threats",
                            "Extended the open source software MISP, by developing a custom Flask based API to integrate with internal C# application and global OSINT feeds",
                            "Served as lead author for fast abstract \"Architecture Design and Implementation of a Security Threat Data Sharing Platform\" accepted at IEEE COMPSAC 2024"
                        ]}
                    />
                    <ExperienceItem 
                        title="Research Assistant"
                        company="Student Undergraduate Research Program · University of West Florida"
                        date="April 2023 – August 2023"
                        responsibilities={[
                            "Led development of a React-based application to enhance situational awareness for medical students in a 5-member team",
                            "Engineered an automated CI/CD pipeline using GitActions, DockerHub, and AWS, streamlining code deployment to production",
                            "Designed and implemented a Docker Swarm architecture, significantly improving system resilience and minimizing downtime",
                            "Enhanced Node.js backend services by implementing automated file compression, integrating AWS S3 storage, and developing complex middleware for features such as request logging"
                        ]}
                    />

                </div>
                <div className="flex-grow min-w-[25px] relative">
            </div>
            </div>
        </section>
    );
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, date, responsibilities }) => {
    return (
        <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="text-neon-green mb-2">{company}</p>
            <p className="text-gray-400 mb-2">{date}</p>
            <ul className="list-disc list-inside text-white">
                {responsibilities.map((responsibility, index) => (
                    <li key={index} className="mb-1">{responsibility}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceSection;
