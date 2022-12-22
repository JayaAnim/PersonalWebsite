import ProjectList from './ProjectList';
import { useState } from 'react';

export default function ProjectPage() {
    const [state, setState] = useState(0);
    const handleClick = () => {
        console.log(state);
        setState(state + 1);
    }
    return (
        <>
            <button style={{width: '100px', height: '100px'}} onClick={handleClick}/>
            <Temp state={state} parentClick={handleClick}/>
        </>
    );
}

function Temp({ state, parentClick }) {
    const handleClick = () => {
        console.log(state);
    }
    return (
        <>
        <button style={{width: '100px', height: '100px'}} onClick={handleClick}/>
        <button style={{width: '100px', height: '100px'}} onClick={parentClick}/>
        </>
    );
}