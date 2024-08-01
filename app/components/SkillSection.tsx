import React from 'react';
import SkillBlockWrapper from './SkillBlock';

const SkillSection: React.FC = () => {
    return (
        <section id="skills" className="relative z-10 min-h-screen w-screen bg-dark-black p-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-electric-blue">Skills</h2>
            <div className="max-w-6xl px-2 flex flex-wrap gap-8 justify-center mx-auto">
                <SkillBlockWrapper/>
            </div>
        </section>
    );
};

export default SkillSection;
