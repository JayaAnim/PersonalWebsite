import React from 'react';



type FallingLetterProps = {
    symbol: string;
    leftPercentage: number;    
    fallHeight: number;
    delay: number
}

export const FallingLetter: React.FC<FallingLetterProps> = ({ symbol, leftPercentage, fallHeight, delay }) => {


    return (
        <div className={`absolute h-3 w-3 bg-none -top-6 fall-15 fall-${fallHeight} falling-letter text-neon-green`}
            style={{
                left: `${leftPercentage}%`,
                animationDelay: `${delay}ms`,
            }}
        >
            {symbol}
        </div >
    );
};

const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

const FallingLetterWrapper: React.FC = () => {

    const codingSymbols = [
        '{', '}', '(', ')', '[', ']', '<', '>', 
        ';', ':', ',', '.', '=', '+', '-', '*', 
        '/', '%', '&', '|', '^', '!', '~', 
        '?', '??', '&&', '||', '=>', '===', '!=='
    ];

    const fallingLetters = [];
    for (let i = 0; i < 50; ++i) {
        const symbolIndex = random(0, 25);
        const leftPercentage = random(0, 100);
        const fallHeight = random(20, 45);
        const delay = random(0, 5000);

        fallingLetters.push(
            <FallingLetter key={i} symbol={codingSymbols[symbolIndex]} leftPercentage={leftPercentage} fallHeight={fallHeight} delay={delay} />
        );
    }

    return (
        <>
            {fallingLetters}
        </>
    );
};

export default FallingLetterWrapper;


