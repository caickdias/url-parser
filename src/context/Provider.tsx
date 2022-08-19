import React, { useState, ReactNode } from 'react';
import PreferencesContext from './Context';
import { Preferences } from '../types/index';

import { setPreferencesToLocalStorage } from '../services/localStorage';

type Props = {
    children: ReactNode;
}

const initialState = {  
    showBaseUrl: false,
    showResource: false,
    showScheme: false,
    showHostname: true,
    showSubdomain: false,
    showDomain: false,
    showTld: false,
    showPath: true,
    showQuery: true,
    showArgs: true,
    hideKeys: false,
    plainText: false,
  }


export const PreferencesProvider = ({ children }: Props) => {

    const [preferences, changePreferences] = useState<Preferences>(initialState);

    const setPreferences = (preferences: Preferences) => {
        changePreferences(preferences);
        setPreferencesToLocalStorage(preferences);
    }

    return(
        <PreferencesContext.Provider value={{ preferences, setPreferences }}>
            {children}
        </PreferencesContext.Provider>
    )
}