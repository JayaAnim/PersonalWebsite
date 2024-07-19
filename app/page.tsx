import React from 'react';
import Header from './components/Header';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';

const Home: React.FC = () => {
    return (
        <main>
            <div className="relative z-10">
                <Header />

                <ExperienceSection/>
                <SkillsSection/>

                <div className="h-screen w-screen bg-dark-black">
                    Section
                </div>

                <div className="h-screen w-screen bg-dark-black">
                    Section
                </div>
            </div>
        </main>
    );
}

export default Home;
