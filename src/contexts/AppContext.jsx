import React, { createContext } from 'react';

const AppContext = createContext();

export function AppContextProvider({ initialState, children }) {
    const { localWindow } = initialState;
    const currentPath = (localWindow && localWindow.location && localWindow.location.pathname) || '';

    return (
        <AppContext.Provider value={{
            currentPath,
        }}>
            {children}
        </AppContext.Provider>
    );
}
