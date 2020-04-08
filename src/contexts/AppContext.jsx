import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const AppContext = createContext();
export function AppContextProvider({ initialState, children }) {
    const baseCookies = JSON.stringify({
        walkthroughStep: 0,
        nickname: '',
        progress: {},
        loggedIn: false,
    });
    const cookieValue = 'ZenDenCookies';
    const { localWindow, currentPath } = initialState;
    const setStorage = (newData) => localStorage.setItem(cookieValue, newData);
    const getStorage = localStorage.getItem(cookieValue) || baseCookies;
    const [zenCookie, setZenCookie] = useState(getStorage);
    const parseCookie = () => JSON.parse(zenCookie);
    const updateCookieValue = (cookieKey, cookieValue) => setZenCookie(JSON.stringify({ ...parseCookie(), [cookieKey]: cookieValue }));
    const resetCookie = () => setZenCookie(baseCookies);

    useEffect(() => {
        if ((getStorage !== zenCookie) && localWindow) {
            setStorage(zenCookie);
        }

        // eslint-disable-next-line
    }, [zenCookie, localWindow])

    const dispatch = {
        updateCookieValue,
        resetCookie,
    };

    return (
        <AppContext.Provider value={{
            localWindow,
            currentPath,
            parseCookie,
            dispatch,
        }}>
            {children}
        </AppContext.Provider>
    );
}

AppContextProvider.defaultProps = {
    initialState: {},
};

AppContextProvider.propTypes = {
    initialState: PropTypes.shape({
        localWindow: PropTypes.object,
        currentPath: PropTypes.string,
    }),
    children: PropTypes.array,
};