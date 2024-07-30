import React, { useEffect, useRef, useCallback }from "react";

export const random = (min: number, max: number): number => Math.floor(Math.random() * (max - min)) + min;

const useRandomInterval = (
    callback: () => void,
    minDelay: number,
    maxDelay: number
): () => void => {

    const timeoutId = useRef<number | null>(null);
    const savedCallback = useRef<() => void>(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {

        const handleTick = () => {
            const nextTickAt = random(minDelay, maxDelay);
            timeoutId.current = window.setTimeout(() => {
                savedCallback.current();
                handleTick();
            }, nextTickAt);
        };
        handleTick();
        return () => {
            if (timeoutId.current !== null) {
                window.clearTimeout(timeoutId.current);
            }
        };
    }, [minDelay, maxDelay]);

    const cancel = useCallback(() => {
        if (timeoutId.current !== null) {
            window.clearTimeout(timeoutId.current);
        }
    }, []);

    return cancel;
};

export default useRandomInterval;
