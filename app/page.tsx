import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ExperienceSection from './components/ExperienceSection';

const Home: React.FC = () => {
    return (
        <main>
            <div>
                <Header />
                <div className="relative h-3 w-screen bg-[#000000]">
                </div>
                <Navbar />
                <ExperienceSection/>


                <div className="h-screen w-screen bg-[#000000]">
                    Section
                </div>

                <div className="h-screen w-screen bg-[#000000]">
                    Section
                </div>

                <div className="h-screen w-screen bg-[#000000]">
                    Section
                </div>
            </div>
        </main>
    );
}

export default Home;
