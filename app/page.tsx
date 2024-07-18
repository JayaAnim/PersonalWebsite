import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';

const Home: React.FC = () => {
    return (
        <main>
            <div>
                <Header />
                <Navbar />
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
