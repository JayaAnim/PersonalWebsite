import React from 'react';
import Header from './components/Header';
import ExperienceSection from './components/ExperienceSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';

const Home: React.FC = () => {
    return (
        <main>
            <div className="relative z-10">
                <Header />

                <ExperienceSection/>
                <SkillSection/>
                <ProjectSection/>
                <div className="h-screen w-screen bg-dark-black">
                    Section
                </div>
            </div>
        </main>
    );
}

export default Home;
