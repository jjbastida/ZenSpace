import { useState, useEffect } from 'react'

export function useLocalWindow() {
    const [localWindow, setLocalWindow] = useState(window || {});

    useEffect(() => {
        if (window && Object.keys(window).length) {
            setLocalWindow(window)
        }
        // eslint-disable-next-line
    }, [window])

    return localWindow;
}